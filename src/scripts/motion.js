export function setupMotion() {
  document.querySelectorAll(".compare").forEach((root) => {
    const input = root.querySelector("input");
    if (!input) return;
    const paint = () => root.style.setProperty("--pos", `${input.value}%`);
    input.addEventListener("input", paint);
    paint();
  });
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const nodes = [...document.querySelectorAll(".hero, main .section")];
  if (!nodes.length) {
    document.documentElement.classList.remove("js");
    return;
  }

  const reveal = () => {
    const line = window.innerHeight * 0.92;
    nodes.forEach((node) => {
      if (node.classList.contains("is-in")) return;
      if (node.getBoundingClientRect().top < line) node.classList.add("is-in");
    });
  };

  document.querySelector(".hero")?.classList.add("is-in");
  reveal();
  window.addEventListener("scroll", reveal, { passive: true });
  window.addEventListener("resize", reveal);

}
