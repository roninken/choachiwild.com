# 04 — Add Google Maps with Route

## Spec

**Feature:** Add a widget with Google Maps showing a route with 3 points:
- Start Point: 4°36'09.8"N 74°03'40.5"W (Bogotá departure zone)
- Stop Point: 4°31'44.2"N 73°55'22.2"W (Choachí)
- Finish Point: 4°31'14.6"N 73°54'33.3"W (Naranjalia)

**As a** customer  
**I want to** see the main route of the trip on a Google Map with the route marked.

**Given** an interested customer that wants to book and see the main route  
**When** the customer goes to the "Discover the Route" section  
**Then** the page shows a Google Map with the route marked with the 3 given points

### Acceptance Criteria

- The map must be a Google Maps component with the route marked as described
- The map must appear after the section description ("from Muisca sacred sites to bonfire…") and before the feature cards (Rarest Ecosystem on Earth, Private Land Access, …)

---

## Plan

### Context
The Experience section describes the expedition route in text. A Google Maps embed with the actual driving route gives customers a spatial understanding of where they are going — reinforcing the "real journey" brand message.

### Coordinates (decimal)
| Point | DMS | Decimal |
|-------|-----|---------|
| Start (Bogotá) | 4°36'09.8"N 74°03'40.5"W | `4.602722, -74.061250` |
| Stop (Choachí) | 4°31'44.2"N 73°55'22.2"W | `4.528944, -73.922833` |
| Finish (Naranjalia) | 4°31'14.6"N 73°54'33.3"W | `4.520722, -73.909250` |

### Approach: Google Maps Embed API — Directions Mode

Single `<iframe>` using the official Google Maps Embed API `directions` mode. No JavaScript needed. Route line, waypoint marker, and path rendered natively by Google.

**Embed URL:**
```
https://www.google.com/maps/embed/v1/directions
  ?key=AIzaSyB3pVYh55plFMnNz3kszdDwdMhyQR72CII
  &origin=4.602722,-74.061250
  &destination=4.520722,-73.909250
  &waypoints=4.528944,-73.922833
  &mode=driving
  &language=en
```

A CSS `filter: invert` technique gives the map a dark/earthy tint matching the site palette.

### Files Changed

| File | Change |
|------|--------|
| `index.html` | Added `<div class="route-map"><iframe ...></div>` between `.section__header` and `.features` in the experience section |
| `style.css` | Added `.route-map` and `.route-map__iframe` styles with dark filter and responsive aspect ratio |

### Verification

1. Open `http://localhost:8765`, scroll to "The Experience" section.
2. Map appears between description paragraph and the 4 feature cards.
3. Route is drawn: Bogotá → Choachí → Naranjalia.
4. Dark tint matches site palette.
5. Mobile (375px) — map expands vertically and remains usable.

### Result

✅ All acceptance criteria met. Verified in browser preview.
