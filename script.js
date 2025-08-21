// Logo entrance animation + waitlist reveal
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.logo span').forEach((letter, i) => {
    setTimeout(() => letter.classList.add('show'), i * 180);
  });

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


// How it Works: accordion toggle on all devices
(function(){
  var cards = document.querySelectorAll('.step');
  cards.forEach(function(card){
    var btn = card.querySelector('.hiw-toggle');
    var extra = card.querySelector('.hiw-extra');
    if (!btn || !extra) return;
    btn.addEventListener('click', function(){
      var collapsed = extra.classList.contains('is-collapsed');
      extra.classList.toggle('is-collapsed');
      btn.setAttribute('aria-expanded', collapsed ? 'true' : 'false');
      btn.textContent = collapsed ? 'Show less' : 'Tell me more';
    });
  });
})();
