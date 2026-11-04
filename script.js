
/* =========================================================
   BEM FAKULTAS VOKASI USU
   script.js — FUNGSI UTAMA BERANDA
   ========================================================= */





/* =========================================================
   4. NAVIGASI MOBILE
   ========================================================= */

function setupNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (!toggle || !nav) return;

  if (toggle.dataset.navInitialized === "true") return;

  toggle.dataset.navInitialized = "true";

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");

    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}


/* =========================================================
   5. ANIMASI REVEAL SAAT SCROLL
   ========================================================= */

function setupScrollReveal() {
  const elements = document.querySelectorAll(
    ".reveal:not(.is-visible)"
  );

  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}


/* =========================================================
   6. INISIALISASI HALAMAN
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  setupNavToggle();

  setupScrollReveal();

  if (typeof renderBPH === "function") {
    try {
      renderBPH();
    } catch (error) {
      console.error("Gagal menampilkan BPH:", error);
    }
  }
});
