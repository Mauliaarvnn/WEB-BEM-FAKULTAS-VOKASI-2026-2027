
/* =========================================================
   BERANDA — MENGENAL KAMI
   Scroll reveal + parallax ringan
   Hanya bekerja di dalam .about-intro
   ========================================================= */

(() => {
  const section = document.querySelector(".about-intro");

  // Berhenti jika bagian Mengenal Kami tidak ditemukan.
  if (!section) return;

  // Hormati pengaturan aksesibilitas pengguna.
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) return;

  /* -----------------------------------------
     1. TAMBAHKAN GARIS DEKORATIF
     ----------------------------------------- */

  if (!section.querySelector(".about-motion-lines")) {
    const lines = document.createElement("div");

    lines.className = "about-motion-lines";
    lines.setAttribute("aria-hidden", "true");

    section.prepend(lines);
  }

  /* -----------------------------------------
     2. TAMBAHKAN ORNAMEN PARALLAX
     ----------------------------------------- */

  if (!section.querySelector(".about-parallax-orb")) {
    const orb = document.createElement("div");

    orb.className = "about-parallax-orb";
    orb.setAttribute("aria-hidden", "true");

    section.append(orb);
  }

  /* -----------------------------------------
     3. TENTUKAN ELEMEN UNTUK SCROLL REVEAL
     ----------------------------------------- */

  const heading = section.querySelector(
    ".about-editorial-heading"
  );

  const main = section.querySelector(
    ".about-editorial-main"
  );

  const photo = section.querySelector(
    ".about-editorial-photo"
  );

  const revealElements = [heading, main, photo];

  revealElements.forEach((element, index) => {
    if (!element) return;

    element.classList.add("about-reveal");
    element.dataset.aboutDelay = String(index + 1);
  });

  /* -----------------------------------------
     4. ANIMASI SAAT BAGIAN MASUK KE LAYAR
     ----------------------------------------- */

  if ("IntersectionObserver" in window) {
    section.classList.add("js-about-motion");

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-about-visible");

          // Animasi cukup dijalankan sekali.
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    revealElements.forEach((element) => {
      if (element) observer.observe(element);
    });
  } else {
    // Fallback untuk browser tanpa IntersectionObserver.
    revealElements.forEach((element) => {
      if (element) {
        element.classList.add("is-about-visible");
      }
    });
  }

  /* -----------------------------------------
     5. PARALLAX RINGAN PADA ORNAMEN
     ----------------------------------------- */

  const orb = section.querySelector(
    ".about-parallax-orb"
  );

  let ticking = false;

  function updateParallax() {
    if (!orb) {
      ticking = false;
      return;
    }

    const rect = section.getBoundingClientRect();

    const viewportHeight =
      window.innerHeight ||
      document.documentElement.clientHeight;

    const progress =
      (viewportHeight - rect.top) /
      (viewportHeight + rect.height);

    // Pergerakan dibatasi agar efek tetap lembut.
    const offset = (progress - 0.5) * 34;

    orb.style.transform =
      `translate3d(0, ${offset.toFixed(2)}px, 0)`;

    ticking = false;
  }

  function requestParallaxUpdate() {
    if (ticking) return;

    ticking = true;
    window.requestAnimationFrame(updateParallax);
  }

  // Passive scroll listener agar scroll tetap ringan.
  window.addEventListener(
    "scroll",
    requestParallaxUpdate,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    requestParallaxUpdate
  );

  // Atur posisi awal ornamen.
  updateParallax();
})();
