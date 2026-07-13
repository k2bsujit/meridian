// Global motion setup: Lenis smooth scroll + GSAP ScrollTrigger reveals +
// image parallax/Ken Burns. Kept as a single small vanilla module (no
// framework) to keep shipped JS minimal, per CLAUDE.md section 2/8.
// Respects prefers-reduced-motion throughout.
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReduced) {
  const lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Scroll-triggered reveals: fade + subtle upward translate, staggered
// within each section per CLAUDE.md section 4.4. Static (fully visible,
// no animation) fallback when the user prefers reduced motion.
document.querySelectorAll("[data-reveal-group]").forEach((group) => {
  const items = group.querySelectorAll("[data-reveal]");

  items.forEach((el, i) => {
    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 16 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        delay: i * 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
  });
});

// Hero: slow, one-directional Ken Burns zoom on load, PLUS a scroll-tied
// parallax drift as the hero scrolls out of view -- per CLAUDE.md
// section 4.4 ("subtle parallax or slow Ken-Burns-style movement on
// hero imagery"). Both target different transform properties (scale vs
// yPercent) so GSAP composites them into one transform with no conflict.
if (!prefersReduced) {
  const heroImg = document.querySelector("[data-kenburns]");
  if (heroImg) {
    gsap.set(heroImg, { scale: 1.08 });

    gsap.to(heroImg, {
      scale: 1.2,
      duration: 24,
      ease: "none",
    });

    const heroSection = heroImg.closest("section");
    gsap.fromTo(
      heroImg,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: heroSection || heroImg,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }
}

// Scroll-tied parallax on framed images (residence cards, lounge,
// streetscape): the image drifts a little slower/faster than the page
// within its own cropped frame. Container must have overflow-hidden.
if (!prefersReduced) {
  document.querySelectorAll("[data-parallax]").forEach((img) => {
    const wrap = img.parentElement;
    if (!wrap) return;

    gsap.set(img, { scale: 1.18 });
    gsap.fromTo(
      img,
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
}
