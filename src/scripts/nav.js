// Off-canvas nav: open/close, focus trap, Escape to close, scroll lock.
// Vanilla JS (no framework island) per CLAUDE.md §2 — this is the only
// interactive chrome on every page, so it stays a single small script.
const toggle = document.getElementById("nav-toggle");
const panel = document.getElementById("off-canvas-nav");

if (toggle && panel) {
  const focusableSelector =
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  let lastFocused = null;

  const onKeydown = (e) => {
    if (e.key === "Escape") {
      closeMenu();
      return;
    }
    if (e.key !== "Tab") return;

    const focusables = Array.from(
      panel.querySelectorAll(focusableSelector)
    ).filter((el) => el.offsetParent !== null);
    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  function openMenu() {
    lastFocused = document.activeElement;
    panel.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    toggle.setAttribute("aria-expanded", "true");
    toggle.classList.add("is-open");
    toggle.querySelector(".sr-only").textContent = "Close menu";
    const first = panel.querySelector(focusableSelector);
    first?.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function closeMenu() {
    panel.classList.add("hidden");
    document.body.style.overflow = "";
    toggle.setAttribute("aria-expanded", "false");
    toggle.classList.remove("is-open");
    toggle.querySelector(".sr-only").textContent = "Open menu";
    document.removeEventListener("keydown", onKeydown);
    (lastFocused || toggle).focus();
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  panel.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", closeMenu)
  );
}
