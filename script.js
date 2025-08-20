// Animate logo letters on load
document.querySelectorAll('.logo span').forEach((letter, i) => {
  setTimeout(() => {
    letter.classList.add('show');
  }, i * 200);
});

// Waitlist form toggle
const btn = document.getElementById('waitlist-btn');
const form = document.getElementById('waitlist-form');
btn.addEventListener('click', () => {
  form.classList.add('visible');
  btn.style.display = 'none';
});
