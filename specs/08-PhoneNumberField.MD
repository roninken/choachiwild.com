# 08 — Contact Number (WhatsApp) Field

## Spec

**Feature:** Add a required "Contact Number (WhatsApp)" field to the booking form, with a country prefix selector showing emoji flags.

**As a** customer  
**I want to** provide my WhatsApp number when enquiring  
**So that** Choachi Wild can reach me directly on WhatsApp

**Given** an interested customer filling the booking form  
**When** they provide their phone number  
**Then** the form sends a combined `phone` field (prefix + number) to Web3Forms

### Acceptance Criteria

- Country prefix selector with emoji flags for all countries (130+)
- Colombia (`🇨🇴 +57`) is the first and default option
- Phone number input is required
- On submit, prefix and number are merged into a single `phone` field before sending
- Field is positioned between the name/email row and the guests/dates row

---

## Plan

### Changes

**File: `index.html`** — new `<div class="form__row">` between name/email and guests/dates rows:
```html
<div class="form__row">
  <div class="form__group form__group--phone">
    <label for="phoneNumber">Contact Number (WhatsApp)</label>
    <div class="phone-field">
      <select id="phonePrefix" name="phone_prefix" class="phone-field__prefix" aria-label="Country code"></select>
      <input type="tel" id="phoneNumber" name="phone_number" class="phone-field__number" placeholder="300 253 3146" required />
    </div>
  </div>
</div>
```

**File: `style.css`** — `.phone-field` compound input styles:
- `.phone-field`: `display: flex`
- `.phone-field__prefix`: 110px wide, semi-transparent dark bg, gold border on focus, no right border
- `.phone-field__number`: flex-grow, no left border (seamless join with prefix)
- Focus-within on the container highlights both borders simultaneously

**File: `main.js`** — two additions:
1. Country list IIFE: populates `<select id="phonePrefix">` with 130+ countries as `[flag, code, name]` tuples, Colombia first
2. Form submit handler update: merges `data.phone = prefix + ' ' + number; delete data.phone_prefix; delete data.phone_number;` before the Web3Forms POST

### Files Changed

| File | Change |
|------|--------|
| `index.html` | New phone field row with prefix select + tel input |
| `style.css` | `.phone-field`, `.phone-field__prefix`, `.phone-field__number` styles |
| `main.js` | Country list IIFE + form submit handler updated to merge phone fields |

### Verification

1. Scroll to the Book section — phone field appears between name/email and guests/dates.
2. Prefix selector defaults to `🇨🇴 +57` (Colombia).
3. Dropdown shows 130+ countries with emoji flags.
4. Submitting without a number triggers browser validation (required).
5. On successful submit, Web3Forms email contains `phone: +57 300253...` (merged field).

### Result

✅ All acceptance criteria met. Verified on desktop — prefix selector renders with Colombia flag default, number input with correct placeholder.
