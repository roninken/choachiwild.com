# 02 — Improve Color of Title

## Spec

**Feature:** "Colombia · Eastern Andes · 2 Days / 1 Night" text is not visible in all devices.

**As a** customer  
**I can't see** the text "Colombia · Eastern Andes · 2 Days / 1 Night"  
**So** change the color of the text in order to be displayed in dark and bright backgrounds.

**Given** an interested customer that wants to book  
**When** the customer accesses the page  
**Then** show the text "Colombia · Eastern Andes · 2 Days / 1 Night" in a color visible on both dark and bright backgrounds — because on mobile the text is shown on the sky of the picture, and on desktop it is shown on the mountain of the picture. Use a color that keeps the UX and style.

### Acceptance Criteria

- The customer can see the text "Colombia · Eastern Andes · 2 Days / 1 Night" even if it is on the sky (bright) on mobile or on the mountain (dark) on desktop

---

## Plan

### Context
The hero eyebrow text was styled with `color: var(--color-gold)` (`#c8a96e`) — a warm mid-tone gold. On desktop the text sits over the dark mountain area of the photo and is readable. On mobile, the photo crops differently and the text lands on the bright sky portion, making the gold text nearly invisible.

The fix keeps the brand style while ensuring legibility on both light and dark photo backgrounds.

### Approach: Lighter Ivory-Gold + Text Shadow

Keep a warm gold tone but lighten it and add a text shadow — the standard editorial technique used by NatGeo and magazines for overlaid captions.

**Change in `style.css`** — `.hero__eyebrow`:

```css
/* Before */
.hero__eyebrow {
  color: var(--color-gold);   /* #c8a96e — invisible on bright sky */
}

/* After */
.hero__eyebrow {
  color: #f0dfa8;             /* lighter ivory-gold — visible on bright sky */
  text-shadow:
    0 1px 6px rgba(0,0,0,.7),   /* dark halo for bright backgrounds */
    0 0 20px rgba(0,0,0,.4);    /* wider ambient shadow for mid-tones */
}
```

`#f0dfa8` is a lighter warm ivory-gold — readable against a bright sky while remaining premium and on-brand over dark mountain areas. The text-shadow ensures contrast on any background.

### Files Changed

| File | Change |
|------|--------|
| `style.css` | Updated `.hero__eyebrow`: lightened `color` to `#f0dfa8`, added `text-shadow` |

### Verification

1. Start server (`python3 -m http.server 8765`).
2. View hero on desktop — eyebrow text visible over dark mountain area.
3. Resize to mobile (375px) — eyebrow text visible over bright sky area.
4. Confirm text still feels premium / on-brand (warm ivory, not harsh white).

### Result

✅ All acceptance criteria met. Verified on desktop and mobile viewports.
