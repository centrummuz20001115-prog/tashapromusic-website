/* =============================================================
   TashaProMusic — interactions & bilingual (PL / UA)
   Polish is the baseline (in HTML); Ukrainian comes from I18N.
   ============================================================= */
(function () {
  "use strict";

  /* ---------- Ukrainian dictionary ---------- */
  const UK = {
    "nav.about": "Про нас",
    "nav.offer": "Напрямки",
    "nav.vivakids": "VIVAKIDS",
    "nav.why": "Чому ми",
    "nav.contact": "Контакти",
    "nav.cta": "Безкоштовний урок",

    "hero.pill": "Новинка",
    "hero.badge": "Музичний центр у <b>Болеславці</b>",
    "hero.title1": "Відкрий свій",
    "hero.title2": "голос і талант",
    "hero.sub": "Уроки вокалу та фортепіано, дитячий сценічний колектив VIVAKIDS і власна студія звукозапису. Педагог із консерваторською освітою — індивідуальний підхід до кожного учня.",
    "hero.cta1": "Записатися на безкоштовний урок",
    "hero.cta2": "Переглянути напрямки",
    "hero.proof1": "Індивідуальний підхід",
    "hero.proof2": "Перший пробний урок",
    "hero.proof3": "Заняття двома мовами",
    "hero.card.k": "Художня керівниця",
    "hero.float1.s": "Вокал і фортепіано",
    "hero.float1.b": "Для дітей і дорослих",
    "hero.float2.s": "Сценічний колектив",

    "about.badge.b": "Консерваторія",
    "about.badge.s": "музична освіта педагога",
    "about.eyebrow": "Про нас",
    "about.title": "Музика, що розвиває — від першої ноти до сцени",
    "about.p1": "TashaProMusic — це Центр музичного розвитку в Болеславці, створений із простою місією: допомогти дітям і дорослим відкрити власний талант і полюбити музику. Тут ідеться не лише про ноти — а про впевненість, дисципліну й радість творчості.",
    "about.p2": "Заняття веде педагог із консерваторською освітою, і кожен учень отримує індивідуальний план відповідно до віку, рівня та цілей. Наша сцена — дитячий колектив VIVAKIDS, а наша майстерня — власна студія звукозапису VIVA STUDIO.",
    "about.sign.role": "Засновниця та художня керівниця",

    "offer.eyebrow": "Напрямки",
    "offer.title": "П’ять напрямків одного центру",
    "offer.sub": "Від першого уроку вокалу до виступу на сцені та професійного запису — усе в одному місці.",
    "offer.vocal.t": "Спів / Вокал",
    "offer.vocal.d": "Індивідуальні та групові уроки вокалу — постановка голосу, дихання, інтерпретація. Для дітей, підлітків і дорослих, на будь-якому рівні.",
    "offer.vocal.m": "Індивідуально та групами ",
    "offer.piano.t": "Фортепіано",
    "offer.piano.d": "Навчання гри на фортепіано з нуля — техніка, читання нот, улюблені твори. Спокійний темп і дружня атмосфера.",
    "offer.piano.m": "Від основ до сцени ",
    "offer.vivakids.t": "VIVAKIDS",
    "offer.vivakids.d": "Дитячий вокально-сценічний колектив. Польський, український та міжнародний репертуар, хореографія, виступи та справжня сцена.",
    "offer.vivakids.m": "Колектив для дітей ",
    "offer.stage.t": "VIVA STAGE — концерти та події",
    "offer.stage.d": "Концерти, святкові гала й виступи наших учнів. Продакшн подій від ідеї до сцени — місце, де народжується сценічний досвід і спільнота.",
    "offer.stage.m": "Гала та сезонні концерти ",
    "offer.studio.t": "VIVA STUDIO",
    "offer.studio.d": "Вокальні записи, кліпи та продакшн музичного контенту — місце, де талант учня перетворюється на готовий матеріал.",
    "offer.studio.m": "Записи та кліпи ",

    "viva.eyebrow": "Наша сцена",
    "viva.title": "— діти, які сяють на сцені",
    "viva.sub": "Вокально-сценічний колектив, у якому діти вчаться співу, руху та впевненості — а потім показують це публіці на справжніх концертах.",
    "viva.li1": "Польський, український і міжнародний репертуар як багатство культур",
    "viva.li2": "Спів, основи хореографії та робота з мікрофоном",
    "viva.li3": "Регулярні виступи: святкові гала, концерти, місцеві події",
    "viva.age1": "VIVAKIDS Mini",
    "viva.age2": "VIVAKIDS",
    "viva.age3": "Молодіжна група",
    "viva.cta": "Запитати про кастинг",
    "viva.card.k": "Дитячий сценічний колектив",

    "why.eyebrow": "Чому ми",
    "why.title": "Більше, ніж уроки музики",
    "why.sub": "Діти, які навчаються музики, краще дають раду концентрації, математиці та впевненості в собі. Ми дбаємо про весь цей розвиток.",
    "why.1.t": "Педагог із консерваторії",
    "why.1.d": "Професійна музична освіта та сценічний досвід у кожному уроці.",
    "why.2.t": "Індивідуальний підхід",
    "why.2.d": "План відповідно до віку, рівня та мрій кожного учня — без шаблонів.",
    "why.3.t": "Перший урок безкоштовно",
    "why.3.d": "Без зобов’язань — приходьте, знайомтеся й переконайтеся, що це місце для вас.",
    "why.4.t": "Розвиток, а не лише техніка",
    "why.4.d": "Концентрація, дисципліна та впевненість, які стають у пригоді далеко за межами музики.",
    "why.5.t": "Справжня сцена",
    "why.5.d": "Концерти та виступи VIVAKIDS дають дітям досвід, якого не дасть жодна аудиторія.",
    "why.6.t": "Заняття польською та українською",
    "why.6.d": "Ми вільно почуваємося обома мовами — раді польським та українським родинам.",

    "steps.eyebrow": "Як почати",
    "steps.title": "Три прості кроки до першого уроку",
    "steps.1.t": "Напишіть нам",
    "steps.1.d": "Заповніть форму або напишіть у WhatsApp / Instagram. Відповідаємо швидко й без зобов’язань.",
    "steps.2.t": "Безкоштовний пробний урок",
    "steps.2.d": "Знайомитеся з педагогом, інструментом і атмосферою. Разом визначаємо цілі та план.",
    "steps.3.t": "Починаєте регулярні заняття",
    "steps.3.d": "Обираєте зручний час — і рушаємо. Крок за кроком, аж до сцени.",

    "faq.eyebrow": "FAQ",
    "faq.title": "Найчастіші запитання",
    "faq.1.q": "Чи потрібно мати власний інструмент?",
    "faq.1.a": "На старті — ні. На уроках користуємося інструментом у центрі. З часом, коли навчаєтеся гри на фортепіано, варто мати інструмент для домашніх занять — залюбки підкажемо, як обрати перший.",
    "faq.2.q": "У якому віці можна починати?",
    "faq.2.a": "Запрошуємо дітей уже від 4–6 років (VIVAKIDS Mini), підлітків і дорослих. Ніколи не пізно почати співати чи грати.",
    "faq.3.q": "Якою мовою проходять заняття?",
    "faq.3.a": "Проводимо заняття польською та українською — підлаштовуємося під учня. Репертуар VIVAKIDS поєднує пісні з різних культур Європи.",
    "faq.4.q": "Чи перший урок справді безкоштовний?",
    "faq.4.a": "Так. Перший пробний урок повністю безкоштовний і без зобов’язань — це нагода познайомитися й перевірити, чи підходимо одне одному.",
    "faq.5.q": "Де проходять заняття?",
    "faq.5.a": "Працюємо в Болеславці (Болеславецький повіт, Нижня Сілезія). Точну адресу й доступний час повідомимо під час запису на пробний урок.",

    "contact.eyebrow": "Контакти",
    "contact.title": "Записатися на безкоштовний урок",
    "contact.sub": "Залиште повідомлення — ми зв’яжемося з вами й узгодимо зручний час.",
    "contact.email": "Ел. пошта",
    "contact.wa": "WhatsApp",
    "contact.wa.b": "Напишіть нам",
    "contact.loc": "Локація",
    "contact.hours": "Години занять",
    "contact.hours.b": "Пн–Сб, за домовленістю",
    "contact.follow": "Стежте за нами",

    "form.name": "Ім’я та прізвище",
    "form.name.ph": "Як до вас звертатися?",
    "form.contact": "Телефон або ел. пошта",
    "form.contact.ph": "Як з вами зв’язатися?",
    "form.dir": "Мене цікавить",
    "form.dir.vocal": "Спів / Вокал",
    "form.dir.piano": "Фортепіано",
    "form.dir.vivakids": "VIVAKIDS (дитячий колектив)",
    "form.dir.studio": "VIVA STUDIO (записи)",
    "form.dir.other": "Щось інше",
    "form.msg": "Повідомлення",
    "form.msg.ph": "Напишіть кілька слів про себе чи дитину — вік, рівень, очікування.",
    "form.submit": "Надіслати заявку",
    "form.note": "Натиснувши «Надіслати», ви відкриєте готове повідомлення у своєму застосунку. Перший пробний урок безкоштовний.",

    "cta.title": "Перший урок — це просто... перший крок",
    "cta.sub": "Не потрібно мати досвід чи інструмент. Достатньо бажання спробувати.",
    "cta.btn": "Замовити безкоштовний урок",

    "footer.about": "Центр музичного розвитку в Болеславці. Спів, фортепіано, дитячий колектив VIVAKIDS, концерти та студія звукозапису.",
    "footer.nav": "Навігація",
    "footer.faq": "FAQ",
    "footer.offer": "Напрямки",
    "footer.social": "Соцмережі",
    "footer.made": "Музика, що розвиває ✦"
  };

  const I18N = { uk: UK };

  /* ---------- i18n engine (PL baseline captured from DOM) ---------- */
  const textEls = Array.from(document.querySelectorAll("[data-i18n]"));
  const phEls = Array.from(document.querySelectorAll("[data-i18n-ph]"));

  textEls.forEach((el) => { el._pl = el.innerHTML; });
  phEls.forEach((el) => { el._plph = el.getAttribute("placeholder") || ""; });

  function setText(el, val) {
    if (val == null) { el.innerHTML = el._pl; return; }
    if (/[<&]/.test(val)) { el.innerHTML = val; return; }
    // Preserve child elements (e.g. inline SVG arrows): replace only leading text.
    if (el.querySelector("*")) {
      let placed = false;
      el.childNodes.forEach((node) => {
        if (node.nodeType === 3) { node.nodeValue = placed ? "" : val; placed = true; }
      });
      if (!placed) el.insertBefore(document.createTextNode(val), el.firstChild);
    } else {
      el.textContent = val;
    }
  }

  let currentLang = "pl";

  function applyLang(lang) {
    currentLang = lang;
    const dict = I18N[lang];
    textEls.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (lang === "pl" || !dict) el.innerHTML = el._pl;
      else setText(el, dict[key]);
    });
    phEls.forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      el.setAttribute("placeholder", lang === "pl" || !dict ? el._plph : (dict[key] ?? el._plph));
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button").forEach((b) => {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("tpm-lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });

  let saved = "pl";
  try { saved = localStorage.getItem("tpm-lang") || "pl"; } catch (e) {}
  if (saved === "uk") applyLang("uk");
  else applyLang("pl");

  /* ---------- Nav: shrink on scroll ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById("burger");
  const scrim = document.getElementById("scrim");
  const closeMenu = () => { document.body.classList.remove("menu-open"); burger.setAttribute("aria-expanded", "false"); };
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
      const uk = currentLang === "uk";

      const subject = uk
        ? "Запис на безкоштовний урок — TashaProMusic"
        : "Zapis na bezpłatną lekcję — TashaProMusic";
      const L = uk
        ? { n: "Ім’я", c: "Контакт", d: "Напрямок", m: "Повідомлення" }
        : { n: "Imię", c: "Kontakt", d: "Kierunek", m: "Wiadomość" };
      const body =
        L.n + ": " + name + "\n" +
        L.c + ": " + contact + "\n" +
        L.d + ": " + dir + "\n" +
        L.m + ": " + msg + "\n";

      window.location.href =
        "mailto:tashapromusic@gmail.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  /* ---------- Footer year ---------- */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
