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

// Scroll cue hide on scroll or after form open
const cue = document.querySelector('.scroll-cue');
if (cue) {
  const hideCue = () => cue.classList.add('hide');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) hideCue();
  }, { passive: true });
  if (btn) btn.addEventListener('click', hideCue);
}
