import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const origin = "https://1609946-9a791bae40cb4443b9242da409a38e48-v10-dev.dev.atoms.dev";
const cdn = "https://mgx-backend-cdn.metadl.com/generate/images/1608951";

const jobs = [
  [`${origin}/logo-256.png`, "public/images/logo.png"],
  [`${cdn}/2026-09-24/xebh56icaliq/hero-aircon-cleaning.png`, "public/images/hero.png"],
  [`${cdn}/2026-09-24/xecj4lacaliq/type-window-ac.png`, "public/images/types/window-ac.png"],
  [`${cdn}/2026-09-24/xecj4yicalga/type-split-wall-ac.png`, "public/images/types/split-wall.png"],
  [`${cdn}/2026-09-24/xecj5hacalha/type-outdoor-unit.png`, "public/images/types/outdoor-unit.png"],
  [`${cdn}/2026-09-24/xecj5uicalhq/type-slim-split-ac.png`, "public/images/types/slim-split.png"],
  [`${cdn}/2026-09-24/xecj6bqcalia/type-ceiling-cassette-ac.png`, "public/images/types/ceiling-cassette.png"],
  [`${cdn}/2026-09-25/xee4laacalga/type-ducted-ac.png`, "public/images/types/ducted.png"],
  [`${cdn}/2026-09-25/xfzaqdacalhq/type-floor-standing-ac.png`, "public/images/types/floor-standing.png"],
  [`${cdn}/2026-09-25/xfzapwicalia/type-fcu.png`, "public/images/types/fcu.png"],
  [`${cdn}/2026-09-25/xfzaqqacalha/type-vrv-vrf.png`, "public/images/types/vrv.png"],
  [`${cdn}/2026-09-25/xfzaq4ycalgq/type-rooftop-package.png`, "public/images/types/rooftop.png"],
  [`${origin}/assets/gallery/dirty-evap-coil.jpg`, "public/images/gallery/dirty-evap-coil.jpg"],
  [`${origin}/assets/gallery/dirty-air-filter.jpg`, "public/images/gallery/dirty-air-filter.jpg"],
  [`${origin}/assets/gallery/condenser-cleaning.jpg`, "public/images/gallery/condenser-cleaning.jpg"],
];

for (let n = 1; n <= 20; n += 1) {
  const id = String(n).padStart(2, "0");
  jobs.push([`${origin}/cases/case-${id}-before.png`, `public/images/cases/case-${id}-before.png`]);
  jobs.push([`${origin}/cases/case-${id}-after.png`, `public/images/cases/case-${id}-after.png`]);
}

for (const [url, dest] of jobs) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, buf);
  console.log(`${dest} ${buf.length}`);
}
