// Sequential logo animation
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.logo span').forEach((letter, i) => {
    setTimeout(() => letter.classList.add('show'), i * 180);
  });

  // HOW section logic: collapsible only on mobile
  const howToggle = document.getElementById('how-toggle');
  const howSteps  = document.getElementById('how-steps');

  function isMobile() {
    return window.matchMedia('(max-width: 860px)').matches;
  }

  function initHowState() {
    if (!howToggle || !howSteps) return;
    if (isMobile()) {
      howSteps.classList.remove('open');
      howToggle.setAttribute('aria-expanded', 'false');
    } else {
      howSteps.classList.add('open');
      howToggle.setAttribute('aria-expanded', 'true');
    }
  }

  initHowState();
  window.addEventListener('resize', initHowState);

  if (howToggle && howSteps) {
    howToggle.addEventListener('click', () => {
      if (!isMobile()) return; // only interactive on mobile
      const open = howSteps.classList.toggle('open');
      howToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Waitlist expand
  const btn  = document.getElementById('waitlist-btn');
  const form = document.getElementById('waitlist-form');
  if (btn && form) {
    btn.addEventListener('click', () => {
      form.classList.add('visible');
      form.classList.remove('visually-hidden');
      btn.style.display = 'none';
      btn.setAttribute('aria-expanded', 'true');
      const input = document.getElementById('email');
      if (input) setTimeout(() => input.focus(), 160);
      const status = document.getElementById('form-status');
      if (status) status.textContent = 'Waitlist form opened.';
    });
  }
});
