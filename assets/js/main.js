// Theme toggle and nav interactions
(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const yearSpan = document.getElementById('year');

  // Year
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Persist theme
  const saved = localStorage.getItem('theme');
  if(saved === 'light') root.classList.add('light');

  function setIcon(){
    const isLight = root.classList.contains('light');
    themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  }
  setIcon();

  themeToggle?.addEventListener('click', ()=>{
    root.classList.toggle('light');
    const mode = root.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
    setIcon();
  });

  navToggle?.addEventListener('click', ()=>{
    navLinks.classList.toggle('open');
  });

  // Close nav when clicking a link (mobile)
  navLinks?.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> navLinks.classList.remove('open'));
  });
})();
