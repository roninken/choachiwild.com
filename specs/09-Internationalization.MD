# 09 — Internationalization (En default, Es if the user choose)

## Spec

**Feature:** Add the i18n support to the site for multi language.

**As a** customer
**I want to** read the landing page in the language of the browser.
**So that** The landing page detect the language of the browser and use it (English for default, add Spanish in this case)

**Given** an interested customer
**When** he/she access to the landing page
**Then** the page detect the language of the browser and use it. Currently the page is in English, add Spanish.

### Acceptance Criteria

- Keep all the copies of english language.
- Add spanish (translate the english copies)
- Add a language selector with the flag of the country (usa for english, spain for spanish) at right top of the page (use a good UX)

---

## Plan

### Approach

Attribute-driven, dictionary-based i18n with no build step — everything runs client-side in the browser (no server-side language, no hosting change), matching the site's plain static-HTML deployment.

1. **New file `i18n.js`** (loaded before `main.js`): holds a flat `en`/`es` translation dictionary, language detection/persistence, and a DOM-application routine.
2. **`index.html`**: every translatable node/attribute annotated with `data-i18n` (text), `data-i18n-html` (content with inline markup like `<em>`/`<br>`), `data-i18n-placeholder`, `data-i18n-aria-label`, `data-i18n-alt`, or `data-i18n-content` — the existing English text stays in place as a literal fallback, only overwritten once the script runs.
3. **`main.js`**: date-picker month/day names and locale, the "Sending…" state, and the success/error modal strings switched to dictionary lookups so the calendar and submit flow respect the active language too.
4. **`style.css`**: new `.lang-switch` pill (gold active state, matches the existing `.nav__cta`/`.phone-field__prefix` look) plus a mobile-sized variant.

**Language resolution order:** `localStorage['cw_lang']` (explicit user choice) → else `navigator.language` starts with `es` → `es`, otherwise → `en`. Toggling updates `localStorage`, `<html lang>`, re-renders all `data-i18n` nodes, and re-renders the date picker.

**UI:** a two-button toggle pill `[🇺🇸 EN | 🇪🇸 ES]` in the nav's top-right (chosen over a dropdown since there are only two languages — one click instead of open-then-select). Placed in a new `.nav__right` wrapper alongside `.nav__links` and `.nav__burger` so it stays visible on mobile regardless of the hamburger menu's open/closed state.

**Out of scope:** per-language URLs/routes, `hreflang` SEO tags, and translating the 130+ country names inside the phone-prefix `<select>` (invisible except as an unlisted tooltip — the visible text is just flag + dial code).

### Changes

**File: `i18n.js`** (new) — `window.ChoachiI18n` IIFE exposing:
- `dict.en` / `dict.es` — 138 matching keys covering every section: meta title/description, nav, hero, intro-strip stats, experience cards, pullquote, both itinerary days (13 stops), destinations gallery (5 items), included checklist (9 items), book form (labels/placeholders/options/button/note), footer, WhatsApp/menu/scroll aria-labels, date-picker strings, and modal/submit-flow strings.
- `dateLocale.en` / `dateLocale.es` — day/month name arrays plus `toLocaleDateString` locale (`en-GB` / `es-CO`) for the date picker.
- `detect()` — reads `localStorage`, falls back to `navigator.language`.
- `t(key)`, `translate(root)`, `apply()`, `setLang(lang)`, `getLang()` — applies translations to the whole document (or a given subtree, for dynamically-created elements like the modal), updates the toggle's active state, and dispatches a `cw:langchange` event.
- Wires click handlers on `.lang-switch__btn` elements.

**File: `index.html`**:
```html
<div class="nav__right">
  <ul class="nav__links">...</ul>
  <div class="lang-switch" id="langSwitch" role="group" aria-label="Language selector">
    <button type="button" class="lang-switch__btn is-active" data-lang="en" aria-pressed="true">🇺🇸 EN</button>
    <button type="button" class="lang-switch__btn" data-lang="es" aria-pressed="false">🇪🇸 ES</button>
  </div>
  <button class="nav__burger" id="navBurger" data-i18n-aria-label="nav_menu_aria" aria-label="Menu">...</button>
</div>
```
Every other section (hero, intro-strip, experience, pullquote, itinerary, destinations, included, book form, footer, WhatsApp button) gets the matching `data-i18n*` attribute added in place — no markup restructuring beyond this and the `<script src="i18n.js"></script>` tag added before `main.js`.

**File: `main.js`**:
1. Date-picker IIFE: `DAYS`/`MONTHS`/locale now read from `window.ChoachiI18n.dateLocale[getLang()]` on every `render()`; `dp-note` and the prev/next `aria-label`s pulled via `t(...)`; a `cw:langchange` listener re-renders an open popup and re-formats an already-selected date.
2. Coming-soon modal markup gets `data-i18n*` attributes and an explicit `window.ChoachiI18n.translate(modal)` call right after it's appended to the DOM (since it's created after `i18n.js`'s initial pass).
3. Submit handler: `'Sending…'`, success/error titles and text, `'Got it'`, and `'Open WhatsApp'` all replaced with `window.ChoachiI18n.t(...)` lookups.

**File: `style.css`** — `.nav__right` (flex wrapper), `.lang-switch` (translucent pill container), `.lang-switch__btn` / `.lang-switch__btn.is-active` (gold-on-dark active state), plus a mobile-breakpoint size reduction.

### Files Changed

| File | Change |
|------|--------|
| `i18n.js` | New — translation dictionary, detection/persistence, DOM application |
| `index.html` | `data-i18n*` attributes across every section, `.nav__right` wrapper + language toggle markup, `i18n.js` script tag |
| `main.js` | Date-picker locale awareness, modal translation, submit-flow string lookups |
| `style.css` | `.nav__right`, `.lang-switch`, `.lang-switch__btn` styles + mobile sizing |

### Verification

1. Served locally (`python3 -m http.server`) and driven with a headless Chromium (Playwright) session.
2. Default load: `<html lang="en">`, nav shows "The Experience" etc., toggle shows `EN` active.
3. Clicked `🇪🇸 ES`: `<html lang="es">`, nav/hero/form labels/placeholders/footer all switched immediately (no reload) — e.g. name label → "Nombre Completo", placeholder → "Tu nombre".
4. Clicked `🇺🇸 EN` again: reverted correctly.
5. Opened the "Preferred Dates" picker in Spanish: month header "Agosto 2026", weekdays `Dom, Lun, Mar, Mié, Jue, Vie, Sáb`, note "Selecciona el día de llegada — la salida es el Día 2".
6. Mobile viewport (375px): toggle pill sits cleanly between the logo and hamburger icon, no overlap.
7. No new console errors (only pre-existing 404s for missing decorative icon SVGs, unrelated to this change).

### Result

✅ All acceptance criteria met. English copy preserved as the default/fallback, full Spanish translation added across all 138 translatable strings, and a flag-based `EN`/`ES` toggle added at the nav's top-right. Verified end-to-end with an automated headless-browser pass on desktop and mobile viewports.
