export function lockPageScroll() {
  if (typeof document === "undefined") return;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

export function unlockPageScroll() {
  if (typeof document === "undefined") return;
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

export function scrollToTop({ immediate = false } = {}) {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
}
