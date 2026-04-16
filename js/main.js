// ColoDrone — main.js




// Smooth scroll for all nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form submission
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Message Sent! We will be in touch within 24 hours.';
    btn.style.background = '#16a34a';
    btn.disabled = true;
  });
}

// Sticky nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 1px 12px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
