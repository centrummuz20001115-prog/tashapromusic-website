# TPMOS — TashaProMusic Operating System

Platforma operacyjna centrum muzycznego **TashaProMusic** (Bolesławiec, Dolny
Śląsk). TPMOS spina w jedną całość automatyzacje, agentów AI, integracje i
narzędzia, które obsługują codzienną pracę szkoły — od pozyskiwania zapytań
(leadów) i grafiku zajęć po komunikację i social media.

> Операційна платформа музичного центру TashaProMusic. TPMOS об'єднує
> автоматизації, AI-агентів, інтеграції та інструменти для щоденної роботи школи.

---

## 🗂️ Struktura / Структура

| Katalog | Przeznaczenie |
|---------|---------------|
| [`docs/`](docs/) | Dokumentacja: architektura, decyzje, przewodniki. |
| [`knowledge/`](knowledge/) | Baza wiedzy o marce i ofercie — źródło dla agentów. |
| [`prompts/`](prompts/) | Szablony promptów LLM (wielokrotnego użytku). |
| [`agents/`](agents/) | Definicje i konfiguracje agentów AI. |
| [`workflows/`](workflows/) | Procesy biznesowe / orkiestracja zadań. |
| [`backend/`](backend/) | API i logika serwerowa. |
| [`frontend/`](frontend/) | Aplikacja dla użytkownika (publiczna). |
| [`dashboard/`](dashboard/) | Panel administracyjny (wewnętrzny). |
| [`integrations/`](integrations/) | Łączniki do usług zewnętrznych. |
| [`n8n/`](n8n/) | Eksporty i konfiguracje automatyzacji n8n. |
| [`tests/`](tests/) | Testy (jednostkowe, integracyjne, e2e). |

## 🔗 Powiązane repozytoria

- **tashapromusic-website** — publiczna strona (landing page PL/UA).
- **tashapromusic-media** — źródło prawdy dla logo, kolorów, zdjęć i wideo.

## 🎨 Marka w skrócie

| Element | Wartość |
|---------|---------|
| Kolory | złoto `#E7C067` · fiolet `#8B5CF6` · tło `#0A0912` · cream `#F6F1E7` |
| Sub-marki | VIVAKIDS · VIVA STAGE · VIVA STUDIO |

## 🚦 Status

Szkielet projektu (scaffold). Każdy katalog zawiera `README.md` opisujący jego
rolę oraz `.gitkeep`, aby zachować pustą strukturę w gicie. Kolejne kroki:
uzupełnianie poszczególnych modułów funkcjonalnością.

---

© TashaProMusic · Bolesławiec, Dolny Śląsk
