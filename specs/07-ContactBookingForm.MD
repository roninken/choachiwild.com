# 07 — Contact/Booking Form

## Spec

**Feature:** Add "Send" action to the bookForm using Web3Forms.

**Given** an interested customer that is going to book
**When** the customer fills name, email, guests, preferred dates and message and clicks "Send Enquiry"
**Then** the page sends the form to Web3Forms (POST https://api.web3forms.com/submit) without reloading

### Acceptance Criteria

- Form is submitted via JavaScript fetch() — no page reload
- If sent successfully: show success modal with "Your enquiry was sent successfully. We will contact you as soon as possible."
- If failed: show error modal with "Ups, sorry but our mail service is broken, if you want you can contact us directly by WhatsApp" and an "Open WhatsApp" button linking to +57 3002533146

---

## Plan

### Context
The form previously showed a "Coming Soon" modal. This feature wires it to Web3Forms so enquiries land in the owner's inbox. The existing modal is repurposed for success/error feedback — no new modals needed.

### Key Decisions
- No page reload — fetch() with Web3Forms JSON API
- Reuse existing #comingSoonModal — swap content dynamically
- WhatsApp fallback uses same wa.me link as the floating button (05)
- Hidden access_key input in HTML — not in JS
- Submit button disabled while sending (prevents double submit)

### Files Changed

| File | Change |
|------|--------|
| index.html | Added hidden input: name="access_key" value="e8bfa2ee-91dd-4355-aee9-a7171a53b0c0" |
| main.js | Replaced form submit handler with async fetch() + dynamic modal content |
| style.css | Added .modal__whatsapp — green CTA button for error state |

### Web3Forms Integration
- Endpoint: https://api.web3forms.com/submit
- Method: POST, Content-Type: application/json
- Payload: all form fields as JSON + botcheck: false

### Verification

1. Fill all fields and click "Send Enquiry" → button shows "Sending…"
2. Success: modal shows "Enquiry Sent!" with "Got it" button, form resets
3. Error (bad key): modal shows "Something went wrong" with green "Open WhatsApp" button
4. WhatsApp button opens wa.me/573002533146 with pre-filled message

### Result

All acceptance criteria met. Success and error paths verified in browser preview.
