# 04b — Add Picture of the Route (replaces 04)

> **Note:** This feature replaces `DEPRECATED-04-GoogleMapsRoute.MD`. The Google Maps embed and API key have been removed.

## Spec

**Feature:** Replace the Google Maps component with a static route map image (`assets/ChoachiWildeTrip.jpeg`)

**As a** customer  
**I want to** see the main route of the trip as a map picture

**Given** an interested customer that wants to book and see the route  
**When** the customer goes to the "Discover the Route" section  
**Then** the page shows a picture of the route

### Acceptance Criteria

- Remove the API key from source code
- Keep the same placement as the previous map component
- The picture must be visible on all devices
- On mobile, tapping the picture expands it in a modal window

---

## Plan

### Context
The Google Maps Embed API approach (spec 04) was replaced with a static image. The API key is fully removed from the codebase. The image expands into a full-screen modal on mobile (≤ 900px viewport) for readability, reusing the existing modal pattern from the Coming Soon feature.

### Files Changed

| File | Change |
|------|--------|
| `specs/04-GoogleMapsRoute.MD` | Renamed to `DEPRECATED-04-GoogleMapsRoute.MD` |
| `index.html` | Replaced `<iframe>` with `<img id="routeMapImg" src="assets/ChoachiWildeTrip.jpeg">` — no API key |
| `style.css` | Replaced iframe styles with image styles; added `#routeMapModal` modal styles |
| `main.js` | Added route map modal IIFE — opens on mobile tap, closes on backdrop/Esc/× button |

### Verification

1. Desktop: route map image renders in the Experience section, between description and feature cards. No modal on click.
2. Mobile (375px): image shows `zoom-in` cursor; tap opens full-screen modal with × close button.
3. Backdrop click or Escape key closes the modal.
4. Source code contains no API key.

### Result

✅ All acceptance criteria met. Verified on desktop and mobile viewports.
