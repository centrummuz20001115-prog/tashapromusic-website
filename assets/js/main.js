/* =============================================================
   TashaProMusic — interactions
   Nav, mobile menu, scroll-reveal, FAQ accordion, lead form.
   ============================================================= */
(function () {
  "use strict";

  /* ---------- Nav: shrink on scroll ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById("burger");
  const scrim = document.getElementById("scrim");
  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    burger.setAttribute("aria-expanded", "false");
  };
  const toggleMenu = () => {
    const open = document.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", String(open));
  };
  burger.addEventListener("click", toggleMenu);
  scrim.addEventListener("click", closeMenu);
  document.querySelectorAll(".mobile-menu a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".acc").forEach((acc) => {
    const q = acc.querySelector(".acc__q");
    const a = acc.querySelector(".acc__a");
    q.addEventListener("click", () => {
      const open = acc.classList.contains("open");
      document.querySelectorAll(".acc").forEach((x) => {
        x.classList.remove("open");
        x.querySelector(".acc__a").style.maxHeight = null;
      });
      if (!open) { acc.classList.add("open"); a.style.maxHeight = a.scrollHeight + "px"; }
    });
  });

  /* ---------- Lead form → open a ready-made e-mail ---------- */
  const form = document.getElementById("leadForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const get = (n) => (form.querySelector('[name="' + n + '"]') || {}).value || "";
      const name = get("name").trim();
      const contact = get("contact").trim();
      const dir = get("direction");
      const msg = get("message").trim();

      const subject = "Zapis na zajęcia — TashaProMusic";
      const body =
        "Imię: " + name + "\n" +
        "Kontakt: " + contact + "\n" +
        "Kierunek: " + dir + "\n" +
        "Wiadomość: " + msg + "\n";

      window.location.href =
        "mailto:centrummuz20001115@gmail.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  /* ---------- WhatsApp / message button → focus the form ---------- */
  const wa = document.querySelector("[data-wa]");
  if (wa) {
    wa.addEventListener("click", () => {
      setTimeout(() => {
        const n = document.getElementById("f-name");
        if (n) n.focus({ preventScroll: true });
      }, 480);
    });
  }

  /* ---------- Smooth-scroll offset handled by CSS; ensure anchor buttons work ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const t = document.querySelector(id);
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth", block: "start" }); history.replaceState(null, "", id); }
      }
    });
  });

  /* ---------- Scroll progress bar ---------- */
  const progress = document.getElementById("scrollProgress");
  if (progress) {
    const updateProgress = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }

  /* ---------- Scrollspy: highlight the nav link of the section in view ---------- */
  const navLinks = Array.from(document.querySelectorAll('.nav__links a[href^="#"]'));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (sections.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = "#" + entry.target.id;
            navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Hero cursor spotlight ---------- */
  const hero = document.querySelector(".hero");
  const spot = document.querySelector(".hero__spot");
  const fine = window.matchMedia("(pointer: fine)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (hero && spot && fine && !reduce) {
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      spot.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
      spot.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    });
  }

  /* ---------- Gallery lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  if (lightbox && lightboxImg) {
    const open = (src, alt) => {
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };
    const close = () => {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      setTimeout(() => { lightboxImg.src = ""; }, 300);
    };
    document.querySelectorAll(".gallery__item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const img = btn.querySelector("img");
        open(btn.getAttribute("data-full") || (img && img.src), img && img.alt);
      });
    });
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
    if (lightboxClose) lightboxClose.addEventListener("click", close);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ---------- Offer cards → preselect direction in the form ---------- */
  const dirSelect = document.getElementById("f-dir");
  document.querySelectorAll(".offer__grid .card[data-dir]").forEach((card) => {
    card.addEventListener("click", () => {
      if (!dirSelect) return;
      dirSelect.value = card.getAttribute("data-dir");
      dirSelect.classList.add("flash");
      setTimeout(() => dirSelect.classList.remove("flash"), 1600);
    });
  });

  /* ---------- Footer year ---------- */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
