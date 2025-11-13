// Toggle del menú mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Función para scroll suave con offset
function scrollToSection(id) {
  const el = document.querySelector(id);
  if (!el) return;

  // offset para que no quede pegado arriba (ajustá el valor si querés)
  const offset = 100;

  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: y,
    behavior: 'smooth'
  });
}

// Scroll suave para anchors del navbar (y cualquier link interno)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    // por las dudas, evitamos anchors vacíos
    if (!href || href === '#') return;

    e.preventDefault();
    scrollToSection(href);

    // cerrar menú mobile si está abierto
    if (navLinks && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});
