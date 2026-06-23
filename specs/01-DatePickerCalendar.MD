# 01 — Date Picker Calendar

## Spec

**Feature:** Add a calendar field in Preferred Dates

**Given** an interested customer that wants to book for two days  
**When** the customer puts the cursor in the Preferred Dates field  
**Then** display a calendar that allows picking just 2 days and one night

### Acceptance Criteria

- The customer can only choose two days and one night
- The days and the night must be consecutive

---

## Plan

### Context
The booking form in `index.html` had a plain text input for "Preferred Dates" (`#date`).
The spec requires replacing it with a custom calendar that enforces the business rule:
exactly 2 consecutive days / 1 night must be selected. No library dependency — stays pure vanilla JS/CSS inline with the project stack.

### Approach: Custom Inline Calendar (no external library)

No frameworks or CDN dependencies. A lightweight custom date picker that:
- Renders a popup calendar grid below the field on focus/click
- Forces the user to pick a **start date** only — the end date (Day 2) is always `start + 1`
- Highlights the two-day range automatically
- Blocks past dates (no booking in the past)
- Writes the selection to the hidden input as a readable string, e.g. `"Thu, 25 Jun 2026 – Fri, 26 Jun 2026"`
- Closes on outside click or after selection

### Files Changed

| File | What changed |
|------|-------------|
| `index.html` | Replaced `<input type="text" id="date">` with a wrapper `<div class="date-picker">` containing a read-only display input + hidden value input + calendar popup container |
| `style.css` | Added `.date-picker` styles: popup positioning, calendar grid, day cells, range highlight, disabled/past days — using existing CSS variables |
| `main.js` | Added `DatePicker` IIFE: render month grid, handle click (pick start → auto-select start+1), navigate months, close on outside click, write value to hidden input |

### Detailed Behaviour

1. **Field display:** read-only input showing placeholder `"Select your dates"` or the chosen range once picked.
2. **Popup opens** on click/focus on that input.
3. **Month navigation:** `‹` / `›` arrows to browse months. Cannot go before current month.
4. **Day selection:**
   - Click Day N → Day N and Day N+1 are highlighted as the range.
   - If Day N is the last day of a month, Day N+1 wraps to the 1st of next month.
   - Past days are visually disabled and unclickable.
5. **Display input** updates to e.g. `"Thu, 25 Jun 2026 – Fri, 26 Jun 2026"`.
6. **Hidden input** (`name="date"`) carries the same string for form submission.
7. **Closes** on outside click or pressing Escape.
8. **Styling:** matches site palette — dark background, gold accent for selected days, subtle hover states.

### Verification

1. Start server (`python3 -m http.server 8765`).
2. Scroll to the Book section and click "Preferred Dates".
3. Confirm calendar popup appears showing current month.
4. Click any available day → two consecutive days highlight, input shows the formatted range.
5. Click a past day → nothing happens.
6. Click outside → calendar closes, selected dates remain in the field.
7. Submit the form → "Coming Soon" modal appears (existing behaviour preserved).

### Result

✅ All acceptance criteria met. Verified in browser preview.
