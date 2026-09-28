import { spawnSync } from "node:child_process";
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";
import assert from "node:assert/strict";

const base = "/cleanaircon";
const site = "https://tomyeung929.github.io" + base;
const build = spawnSync(process.execPath, ["node_modules/astro/astro.js", "build"], {
  stdio: "inherit",
  env: { ...process.env, DEPLOY_BASE_PATH: base, DEPLOY_SITE_URL: site },
});
if (build.status !== 0) process.exit(build.status || 1);

async function* files(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* files(path);
    else yield path;
  }
}

// Existing content uses root-relative URLs; prefix them for project Pages.
// Astro's generated bundle URLs already include the base and stay unchanged.
const htmlFiles = [];
for await (const file of files("dist")) {
  if (!file.endsWith(".html")) continue;
  const source = await readFile(file, "utf8");
  const html = source.replace(/\b(href|src|action)="(\/(?!\/)[^"]*)"/g, (match, attr, url) => {
    if (url === base || url.startsWith(base + "/")) return match;
    return attr + '="' + base + url + '"';
  });
  await writeFile(file, html);
  htmlFiles.push([file, html]);
}
await writeFile("dist/.nojekyll", "");

// Fail deployment if any local page or asset would be broken.
let checked = 0;
for (const [file, html] of htmlFiles) {
  for (const match of html.matchAll(/\b(?:href|src)="(\/(?!\/)[^"]*)"/g)) {
    assert.ok(match[1].startsWith(base + "/"), file + ": missing base " + match[1]);
    const pathname = decodeURIComponent(match[1].split(/[?#]/)[0].slice(base.length));
    const target = resolve("dist", "." + pathname);
    assert.ok(target.startsWith(resolve("dist")), "Path escapes output directory");
    const info = await stat(target).catch(() => null);
    assert.ok(info, file + ": missing " + pathname);
    if (info.isDirectory()) await stat(join(target, "index.html"));
    checked++;
  }
  if (!file.endsWith("404.html")) {
    assert.ok(html.includes(site), file + ": missing deployment URL");
    assert.ok(!html.includes(site + base), file + ": duplicated base path");
  }
}
console.log("GitHub Pages ready: " + htmlFiles.length + " pages, " + checked + " local links checked.");
