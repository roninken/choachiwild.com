// ── NAV scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Mobile burger menu
const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav__links');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── Scroll-reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.feature, .stop, .gallery__item, .checklist li').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ── Phone prefix country list
(function () {
  const countries = [
    ['🇺🇸', '+1',   'United States'],
    ['🇨🇦', '+1',   'Canada'],
    ['🇩🇴', '+1',   'Dominican Rep.'],
    ['🇯🇲', '+1',   'Jamaica'],
    ['🇵🇷', '+1',   'Puerto Rico'],
    ['🇷🇺', '+7',   'Russia'],
    ['🇰🇿', '+7',   'Kazakhstan'],
    ['🇪🇬', '+20',  'Egypt'],
    ['🇿🇦', '+27',  'South Africa'],
    ['🇬🇷', '+30',  'Greece'],
    ['🇳🇱', '+31',  'Netherlands'],
    ['🇧🇪', '+32',  'Belgium'],
    ['🇫🇷', '+33',  'France'],
    ['🇪🇸', '+34',  'Spain'],
    ['🇭🇺', '+36',  'Hungary'],
    ['🇮🇹', '+39',  'Italy'],
    ['🇻🇦', '+39',  'Vatican'],
    ['🇷🇴', '+40',  'Romania'],
    ['🇨🇭', '+41',  'Switzerland'],
    ['🇦🇹', '+43',  'Austria'],
    ['🇬🇧', '+44',  'United Kingdom'],
    ['🇩🇰', '+45',  'Denmark'],
    ['🇸🇪', '+46',  'Sweden'],
    ['🇳🇴', '+47',  'Norway'],
    ['🇵🇱', '+48',  'Poland'],
    ['🇩🇪', '+49',  'Germany'],
    ['🇵🇪', '+51',  'Peru'],
    ['🇲🇽', '+52',  'Mexico'],
    ['🇨🇺', '+53',  'Cuba'],
    ['🇦🇷', '+54',  'Argentina'],
    ['🇧🇷', '+55',  'Brazil'],
    ['🇨🇱', '+56',  'Chile'],
    ['🇨🇴', '+57',  'Colombia'],
    ['🇻🇪', '+58',  'Venezuela'],
    ['🇲🇾', '+60',  'Malaysia'],
    ['🇦🇺', '+61',  'Australia'],
    ['🇮🇩', '+62',  'Indonesia'],
    ['🇵🇭', '+63',  'Philippines'],
    ['🇳🇿', '+64',  'New Zealand'],
    ['🇸🇬', '+65',  'Singapore'],
    ['🇹🇭', '+66',  'Thailand'],
    ['🇻🇳', '+84',  'Vietnam'],
    ['🇯🇵', '+81',  'Japan'],
    ['🇰🇷', '+82',  'South Korea'],
    ['🇨🇳', '+86',  'China'],
    ['🇹🇷', '+90',  'Turkey'],
    ['🇮🇳', '+91',  'India'],
    ['🇵🇰', '+92',  'Pakistan'],
    ['🇱🇰', '+94',  'Sri Lanka'],
    ['🇲🇲', '+95',  'Myanmar'],
    ['🇮🇷', '+98',  'Iran'],
    ['🇲🇦', '+212', 'Morocco'],
    ['🇩🇿', '+213', 'Algeria'],
    ['🇱🇾', '+218', 'Libya'],
    ['🇹🇳', '+216', 'Tunisia'],
    ['🇸🇳', '+221', 'Senegal'],
    ['🇨🇮', '+225', 'Côte d\'Ivoire'],
    ['🇲🇺', '+230', 'Mauritius'],
    ['🇬🇭', '+233', 'Ghana'],
    ['🇳🇬', '+234', 'Nigeria'],
    ['🇨🇲', '+237', 'Cameroon'],
    ['🇸🇩', '+249', 'Sudan'],
    ['🇷🇼', '+250', 'Rwanda'],
    ['🇪🇹', '+251', 'Ethiopia'],
    ['🇰🇪', '+254', 'Kenya'],
    ['🇹🇿', '+255', 'Tanzania'],
    ['🇺🇬', '+256', 'Uganda'],
    ['🇲🇿', '+258', 'Mozambique'],
    ['🇿🇲', '+260', 'Zambia'],
    ['🇲🇬', '+261', 'Madagascar'],
    ['🇿🇼', '+263', 'Zimbabwe'],
    ['🇳🇦', '+264', 'Namibia'],
    ['🇲🇼', '+265', 'Malawi'],
    ['🇧🇼', '+267', 'Botswana'],
    ['🇦🇴', '+244', 'Angola'],
    ['🇵🇹', '+351', 'Portugal'],
    ['🇱🇺', '+352', 'Luxembourg'],
    ['🇮🇪', '+353', 'Ireland'],
    ['🇮🇸', '+354', 'Iceland'],
    ['🇦🇱', '+355', 'Albania'],
    ['🇲🇹', '+356', 'Malta'],
    ['🇨🇾', '+357', 'Cyprus'],
    ['🇫🇮', '+358', 'Finland'],
    ['🇧🇬', '+359', 'Bulgaria'],
    ['🇱🇹', '+370', 'Lithuania'],
    ['🇱🇻', '+371', 'Latvia'],
    ['🇪🇪', '+372', 'Estonia'],
    ['🇲🇩', '+373', 'Moldova'],
    ['🇦🇲', '+374', 'Armenia'],
    ['🇧🇾', '+375', 'Belarus'],
    ['🇦🇩', '+376', 'Andorra'],
    ['🇲🇨', '+377', 'Monaco'],
    ['🇸🇲', '+378', 'San Marino'],
    ['🇺🇦', '+380', 'Ukraine'],
    ['🇷🇸', '+381', 'Serbia'],
    ['🇲🇪', '+382', 'Montenegro'],
    ['🇭🇷', '+385', 'Croatia'],
    ['🇸🇮', '+386', 'Slovenia'],
    ['🇧🇦', '+387', 'Bosnia & Herz.'],
    ['🇲🇰', '+389', 'North Macedonia'],
    ['🇨🇿', '+420', 'Czech Republic'],
    ['🇸🇰', '+421', 'Slovakia'],
    ['🇱🇮', '+423', 'Liechtenstein'],
    ['🇬🇹', '+502', 'Guatemala'],
    ['🇸🇻', '+503', 'El Salvador'],
    ['🇭🇳', '+504', 'Honduras'],
    ['🇳🇮', '+505', 'Nicaragua'],
    ['🇨🇷', '+506', 'Costa Rica'],
    ['🇵🇦', '+507', 'Panama'],
    ['🇧🇴', '+591', 'Bolivia'],
    ['🇪🇨', '+593', 'Ecuador'],
    ['🇵🇾', '+595', 'Paraguay'],
    ['🇺🇾', '+598', 'Uruguay'],
    ['🇭🇰', '+852', 'Hong Kong'],
    ['🇧🇩', '+880', 'Bangladesh'],
    ['🇹🇼', '+886', 'Taiwan'],
    ['🇱🇧', '+961', 'Lebanon'],
    ['🇯🇴', '+962', 'Jordan'],
    ['🇮🇶', '+964', 'Iraq'],
    ['🇰🇼', '+965', 'Kuwait'],
    ['🇸🇦', '+966', 'Saudi Arabia'],
    ['🇦🇪', '+971', 'UAE'],
    ['🇮🇱', '+972', 'Israel'],
    ['🇧🇭', '+973', 'Bahrain'],
    ['🇶🇦', '+974', 'Qatar'],
    ['🇲🇳', '+976', 'Mongolia'],
    ['🇳🇵', '+977', 'Nepal'],
    ['🇦🇿', '+994', 'Azerbaijan'],
    ['🇬🇪', '+995', 'Georgia'],
    ['🇺🇿', '+998', 'Uzbekistan'],
  ];

  const sel = document.getElementById('phonePrefix');
  if (!sel) return;

  countries.forEach(([flag, code, name], i) => {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = `${flag} ${code}`;
    opt.title = name;
    if (code === '+57' && name === 'Colombia') opt.selected = true;
    sel.appendChild(opt);
  });
})();

// ── Date Picker
(function () {
  const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const picker   = document.getElementById('datePicker');
  const display  = document.getElementById('date');
  const hidden   = document.getElementById('dateValue');
  const popup    = document.getElementById('datePopup');

  const today = new Date(); today.setHours(0,0,0,0);
  let viewYear  = today.getFullYear();
  let viewMonth = today.getMonth();
  let startDate = null;

  function addDays(d, n) {
    const r = new Date(d); r.setDate(r.getDate() + n); return r;
  }

  function sameDay(a, b) {
    return a && b && a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate();
  }

  function formatRange(s, e) {
    const opts = { weekday:'short', day:'numeric', month:'short', year:'numeric' };
    return s.toLocaleDateString('en-GB', opts) + ' – ' + e.toLocaleDateString('en-GB', opts);
  }

  function render() {
    const endDate = startDate ? addDays(startDate, 1) : null;
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    const isPrevDisabled = viewYear === today.getFullYear() && viewMonth === today.getMonth();

    popup.innerHTML = `
      <div class="dp-header">
        <button class="dp-nav" id="dpPrev" aria-label="Previous month" ${isPrevDisabled ? 'disabled' : ''}>&#8249;</button>
        <span class="dp-header__title">${MONTHS[viewMonth]} ${viewYear}</span>
        <button class="dp-nav" id="dpNext" aria-label="Next month">&#8250;</button>
      </div>
      <div class="dp-weekdays">${DAYS.map(d => `<span>${d}</span>`).join('')}</div>
      <div class="dp-grid" id="dpGrid">
        ${Array(firstDay).fill('<div class="dp-day dp-day--empty"></div>').join('')}
        ${Array.from({length: daysInMonth}, (_, i) => {
          const d = new Date(viewYear, viewMonth, i + 1);
          const isPast = d < today;
          const isStart = sameDay(d, startDate);
          const isEnd   = sameDay(d, endDate);
          let cls = 'dp-day';
          if (isPast)    cls += ' dp-day--disabled';
          if (isStart)   cls += ' dp-day--start';
          if (isEnd)     cls += ' dp-day--end';
          return `<div class="${cls}" data-date="${d.toISOString()}">${i + 1}</div>`;
        }).join('')}
      </div>
      <p class="dp-note">Select arrival day — departure is Day 2</p>
    `;

    document.getElementById('dpPrev').addEventListener('click', (e) => {
      e.stopPropagation();
      if (isPrevDisabled) return;
      viewMonth--; if (viewMonth < 0) { viewMonth = 11; viewYear--; }
      render();
    });
    document.getElementById('dpNext').addEventListener('click', (e) => {
      e.stopPropagation();
      viewMonth++; if (viewMonth > 11) { viewMonth = 0; viewYear++; }
      render();
    });

    document.getElementById('dpGrid').querySelectorAll('.dp-day:not(.dp-day--disabled):not(.dp-day--empty)').forEach(cell => {
      cell.addEventListener('click', () => {
        startDate = new Date(cell.dataset.date);
        const end = addDays(startDate, 1);
        const label = formatRange(startDate, end);
        display.value = label;
        hidden.value  = label;
        render();
        setTimeout(close, 180);
      });
    });
  }

  function open() {
    popup.classList.add('open');
    popup.setAttribute('aria-hidden', 'false');
    render();
  }

  function close() {
    popup.classList.remove('open');
    popup.setAttribute('aria-hidden', 'true');
  }

  display.addEventListener('click', open);

  document.addEventListener('click', e => {
    if (!picker.contains(e.target)) close();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

// ── Coming Soon Modal
const modal = document.createElement('div');
modal.id = 'comingSoonModal';
modal.innerHTML = `
  <div class="modal__backdrop"></div>
  <div class="modal__box">
    <p class="modal__label">Choachi Wild</p>
    <h2 class="modal__title">Coming Soon</h2>
    <p class="modal__text">Online booking is on its way. In the meantime, reach us directly at <a href="mailto:info@choachiwild.com">info@choachiwild.com</a></p>
    <button class="btn btn--primary modal__close">Got it</button>
  </div>
`;
document.body.appendChild(modal);

function openModal() {
  modal.classList.add('modal--open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.remove('modal--open');
  document.body.style.overflow = '';
}

modal.querySelector('.modal__backdrop').addEventListener('click', closeModal);
modal.querySelector('.modal__close').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Booking form — Web3Forms fetch submission
document.getElementById('bookForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const btn  = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;

  // Disable button while sending
  btn.disabled = true;
  btn.innerHTML = 'Sending…';

  // Collect form data as JSON
  const data = Object.fromEntries(new FormData(form));
  // Merge phone prefix + number into a single field
  data.phone = (data.phone_prefix || '') + ' ' + (data.phone_number || '');
  delete data.phone_prefix;
  delete data.phone_number;
  data.botcheck = false;

  let success = false;
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    });
    success = res.ok;
  } catch (_) {
    success = false;
  }

  // Update modal content based on result
  const title = modal.querySelector('.modal__title');
  const text  = modal.querySelector('.modal__text');
  const close = modal.querySelector('.modal__close');

  if (success) {
    title.textContent = 'Enquiry Sent!';
    text.innerHTML    = 'Your enquiry was sent successfully. We will contact you as soon as possible.';
    close.textContent = 'Got it';
    close.className   = 'btn btn--primary modal__close';
    form.reset();
  } else {
    title.textContent = 'Something went wrong';
    text.innerHTML    = 'Ups, sorry but our mail service is broken, if you want you can contact us directly by WhatsApp';
    close.outerHTML   = `<a href="https://wa.me/573002533146?text=Choachi%20Wild%2C%20I%20have%20this%20question%3A%20"
      target="_blank" rel="noopener noreferrer" class="modal__whatsapp modal__close">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.121 1.533 5.847L.057 23.882a.5.5 0 0 0 .609.61l6.098-1.597A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.013-1.376l-.36-.214-3.724.976.994-3.62-.235-.373A9.818 9.818 0 1 1 12 21.818z"/>
      </svg>
      Open WhatsApp
    </a>`;
    // Re-bind close for the new element
    modal.querySelector('.modal__close').addEventListener('click', closeModal);
  }

  btn.disabled  = false;
  btn.innerHTML = originalText;
  openModal();
});
