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

// FRNK HIW accordion (robust, all devices)
(function(){
  function bindToggles(scope){
    (scope || document).querySelectorAll('.hiw-toggle').forEach(function(btn){
      if (btn.__frnkBound) return; btn.__frnkBound = true;
      var targetId = btn.getAttribute('aria-controls');
      var extra = document.getElementById(targetId);
      if (!extra) return;
      btn.addEventListener('click', function(){
        var collapsed = extra.classList.contains('is-collapsed');
        extra.classList.toggle('is-collapsed');
        btn.setAttribute('aria-expanded', collapsed ? 'true' : 'false');
        btn.textContent = collapsed ? 'Show less' : 'Tell me more';
      });
    });
  }
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ bindToggles(document); });
  } else { bindToggles(document); }
})();
