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

  /* ---------- Lead form → TPMOS API (fallback: e-mail) ---------- */
  const form = document.getElementById("leadForm");
  if (form) {
    const api = (form.dataset.api || "").replace(/\/+$/, "");

    const sendMailto = (name, contact, dir, msg) => {
      const subject = "Zapis na zajęcia — TashaProMusic";
      const body =
        "Imię: " + name + "\n" +
        "Kontakt: " + contact + "\n" +
        "Kierunek: " + dir + "\n" +
        "Wiadomość: " + msg + "\n";
      window.location.href =
        "mailto:tashapromusic@gmail.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const get = (n) => (form.querySelector('[name="' + n + '"]') || {}).value || "";
      const name = get("name").trim();
      const contact = get("contact").trim();
      const dir = get("direction");
      const dirLabel = (form.querySelector('[name="direction"] option:checked') || {}).textContent || dir;
      const msg = get("message").trim();

      if (!api) return sendMailto(name, contact, dirLabel, msg);

      const btn = form.querySelector('button[type="submit"]');
      const btnText = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Wysyłanie…";
      try {
        const res = await fetch(api + "/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            contact: contact,
            language: "pl",
            serviceId: dir || undefined,
            message: msg || undefined
          })
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        form.reset();
        btn.textContent = "Dziękujemy! Odezwiemy się wkrótce ✓";
        setTimeout(() => { btn.textContent = btnText; btn.disabled = false; }, 6000);
      } catch (_err) {
        btn.textContent = btnText;
        btn.disabled = false;
        sendMailto(name, contact, dirLabel, msg); // awaria API → e-mail
      }
    });
  }

  /* ---------- Footer year ---------- */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
