// Sequential logo animation
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.logo span').forEach((letter, i) => {
    setTimeout(() => letter.classList.add('show'), i * 180);
  });
});

// Waitlist expand + ARIA updates
const btn = document.getElementById('waitlist-btn');
const form = document.getElementById('waitlist-form');
if (btn && form) {
  btn.addEventListener('click', () => {
    form.classList.add('visible');
    form.classList.remove('visually-hidden');
    btn.style.display = 'none';
    btn.setAttribute('aria-expanded', 'true');
    const input = document.getElementById('email');
    if (input) setTimeout(() => input.focus(), 180);
    const status = document.getElementById('form-status');
    if (status) status.textContent = 'Waitlist form opened.';
  });
}

// Collapsible HOW section
const howToggle = document.getElementById('how-toggle');
const howSteps = document.getElementById('how-steps');
function openHow() {
  if (!howSteps.classList.contains('open')) {
    howSteps.classList.add('open');
    howToggle.setAttribute('aria-expanded', 'true');
  }
}
function closeHow() {
  if (howSteps.classList.contains('open')) {
    howSteps.classList.remove('open');
    howToggle.setAttribute('aria-expanded', 'false');
  }
}
if (howToggle && howSteps) {
  // Desktop: click toggles
  howToggle.addEventListener('click', () => {
    if (window.matchMedia('(min-width: 861px)').matches) {
      if (howSteps.classList.contains('open')) { closeHow(); } else { openHow(); }
    }
  });
  // Mobile: auto-open on first scroll
  let openedOnScroll = false;
  window.addEventListener('scroll', () => {
    if (!openedOnScroll && window.matchMedia('(max-width: 860px)').matches) {
      if (window.scrollY > 20) { openHow(); openedOnScroll = true; }
    }
  }, { passive: true });
}
