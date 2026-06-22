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

    document.getElementById('dpPrev').addEventListener('click', () => {
      if (isPrevDisabled) return;
      viewMonth--; if (viewMonth < 0) { viewMonth = 11; viewYear--; }
      render();
    });
    document.getElementById('dpNext').addEventListener('click', () => {
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

  display.addEventListener('click', () => popup.classList.contains('open') ? close() : open());
  display.addEventListener('focus', open);

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

// ── Booking form
document.getElementById('bookForm').addEventListener('submit', e => {
  e.preventDefault();
  openModal();
});
