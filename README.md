# TashaProMusic — Centrum Rozwoju Muzycznego

Oficjalna strona internetowa centrum muzycznego **TashaProMusic** w Bolesławcu
(Dolny Śląsk). Nowoczesny, dwujęzyczny (PL / UA) landing page bez frameworków —
czysty HTML, CSS i JavaScript, gotowy do hostowania na GitHub Pages.

> Офіційний сайт музичного центру TashaProMusic у Болеславці. Сучасний
> двомовний (PL / UA) односторінковий сайт без фреймворків.

---

## ✨ Co zawiera / Що всередині

- **Dwujęzyczność PL ⇄ UA** — polski to język domyślny (baza w HTML), ukraiński
  ładowany ze słownika w `assets/js/main.js`. Wybór zapamiętywany w `localStorage`.
- **Sekcje**: hero, o nas, oferta (Wokal · Pianino · VIVAKIDS · VIVA STAGE ·
  VIVA STUDIO), sekcja VIVAKIDS, „dlaczego my", jak zacząć, FAQ, kontakt z
  formularzem, stopka.
- **Design**: ciemny motyw, akcenty złoto + fiolet (kolory marki), animacje
  pojawiania się przy scrollu, responsywność, dostępność (aria, `prefers-reduced-motion`).
- **Zero zależności budowania** — otwierasz `index.html` i działa.

## 📁 Struktura

```
index.html              # cała strona (jeden dokument)
assets/
  css/styles.css        # design system + style
  js/main.js            # i18n (PL/UA), nawigacja, animacje, formularz
  img/
    logo.svg            # logo / emblemat
    favicon.svg         # ikona karty przeglądarki
```

## 🚀 Uruchomienie lokalne

```bash
# dowolny statyczny serwer, np.:
python3 -m http.server 8080
# → http://localhost:8080
```

## 🌐 Publikacja na GitHub Pages

1. Repozytorium → **Settings → Pages**.
2. *Source*: **Deploy from a branch**, branch: `main` (lub bieżący), katalog `/root`.
3. Po chwili strona będzie dostępna pod `https://<user>.github.io/<repo>/`.

## ✏️ Co warto uzupełnić / Що варто заповнити

Poniższe miejsca zawierają dane tymczasowe (placeholdery) — podmień na prawdziwe:

| Gdzie | Co podmienić |
|-------|--------------|
| `index.html` → sekcja `#contact`, link `data-wa` (`wa.me/000000000`) | prawdziwy numer WhatsApp |
| `index.html` → linki social (`instagram.com/...`, `facebook.com/...`, `tiktok.com/...`, `youtube.com/...`) | rzeczywiste adresy profili |
| `index.html` → `tashapromusic@gmail.com` | docelowy adres e-mail (jeśli inny) |
| FAQ / kontakt → dokładny adres | pełny adres zajęć w Bolesławcu |
| `assets/img/` | prawdziwe zdjęcia i logo (obecnie elegancki placeholder SVG) |
| `sitemap.xml` + `robots.txt` | podmień domenę `https://tashapromusic.pl/` na docelowy adres |
| `index.html` → blok `application/ld+json` | zaktualizuj dane firmy (adres, telefon) dla SEO / Google |

Formularz kontaktowy otwiera gotową wiadomość e-mail (`mailto:`). Aby zbierać
zgłoszenia bez klienta poczty, można podłączyć usługę typu Formspree lub własny
endpoint w `assets/js/main.js` (funkcja obsługi `#leadForm`).

## 🎨 Kolory marki

| Rola | HEX |
|------|-----|
| Tło (near-black violet) | `#0A0912` |
| Złoto | `#E7C067` → `#C1902F` |
| Fiolet | `#8B5CF6` → `#6D28D9` |
| Tekst / cream | `#F6F1E7` |

---

© TashaProMusic · Bolesławiec, Dolny Śląsk
