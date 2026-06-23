# 03 — Add "1 Guest" Option

## Spec

**Feature:** Add the option 1 Guest to the Number of Guests field

**As a** customer  
**I want to** book alone, for one person  
**So I** should be able to pick the "1 Guest" option

**Given** an interested customer that wants to book for him/herself  
**When** the customer accesses the page  
**Then** the page must have a "1 Guest" option available to pick

### Acceptance Criteria

- The "1 Guest" option must be available in the Number of Guests dropdown
- This field must be mandatory

---

## Plan

### Context
The Number of Guests `<select>` in the booking form started at 2 guests. A customer wanting to book solo had no option. The field also lacked the `required` attribute.

### Changes

**File: `index.html`** — two edits to the `#guests` select:

1. Added `<option value="1">1 guest</option>` as the first (default) option.
2. Added `required` attribute to the `<select>` element.

```html
<!-- Before -->
<select id="guests" name="guests">
  <option value="2">2 guests</option>
  ...

<!-- After -->
<select id="guests" name="guests" required>
  <option value="1">1 guest</option>
  <option value="2">2 guests</option>
  ...
```

### Files Changed

| File | Change |
|------|--------|
| `index.html` | Added `1 guest` option as first item, added `required` to `<select>` |

No CSS or JS changes needed.

### Verification

1. Open `http://localhost:8765`, scroll to the Book section.
2. Confirm "1 guest" appears as the first (default) option in the dropdown.
3. Confirm `required` attribute is present on the select element.

### Result

✅ All acceptance criteria met. Verified in browser preview.
