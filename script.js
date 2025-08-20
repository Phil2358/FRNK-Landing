// Sequential logo animation
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.logo span').forEach((letter, i) => {
    setTimeout(() => letter.classList.add('show'), i * 180);
  });
});

// Waitlist expand
const btn = document.getElementById('waitlist-btn');
const form = document.getElementById('waitlist-form');
if (btn && form) {
  btn.addEventListener('click', () => {
    form.classList.add('visible');
    btn.style.display = 'none';
    const input = form.querySelector('input[type="email"]');
    if (input) setTimeout(() => input.focus(), 180);
  });
}
