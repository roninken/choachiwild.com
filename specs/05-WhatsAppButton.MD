# 05 — WhatsApp Button

## Spec

**Feature:** Add a WhatsApp button always visible in the page (even when scrolling) in the bottom right.

**Given** an interested customer that accesses the landing page
**When** they click on the WhatsApp button
**Then** the WhatsApp application opens and redirects to write to the number +57 3002533146

### Acceptance Criteria

- Once the customer clicks the WhatsApp button, the WhatsApp application opens and redirects to +57 3002533146 with the preloaded message: "Choachi Wild, I have this question: "
- The button is always visible, even when scrolling
- Responsive for mobile and desktop

---

## Plan

### Context
Customers need a quick, always-visible way to contact Choachi Wild directly. A fixed WhatsApp button in the bottom-right corner persists across all scroll positions on both mobile and desktop.

### WhatsApp Deep Link
```
https://wa.me/573002533146?text=Choachi%20Wild%2C%20I%20have%20this%20question%3A%20
```
- 573002533146 = country code 57 + number 3002533146
- Pre-filled message: "Choachi Wild, I have this question: "

### Files Changed

| File | Change |
|------|--------|
| index.html | Added <a class="whatsapp-btn"> with inline SVG icon before </body> |
| style.css | Added .whatsapp-btn — position: fixed, bottom-right, z-index 300, green circle with hover scale |

No JavaScript needed — plain anchor tag.

### Styling
- position: fixed; bottom: 1.75rem; right: 1.75rem; z-index: 300
- Above nav (100), modals (200), and date picker (150)
- Green #25d366 (official WhatsApp brand colour)
- 56px desktop / 50px mobile
- Scale on hover for desktop feedback

### Verification

1. Open http://localhost:8765 — green WhatsApp button visible bottom-right.
2. Scroll down any section — button stays fixed.
3. Click — opens wa.me with pre-filled message (WhatsApp Web on desktop, app on mobile).
4. Resize to 375px — button still visible and correctly sized.

### Result

All acceptance criteria met. Verified on desktop and mobile viewports.
