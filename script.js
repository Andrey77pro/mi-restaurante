document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Sticky Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = '#0a0a0a';
      navbar.style.padding = '15px 10%';
    } else {
      navbar.style.background = 'rgba(26, 26, 26, 0.95)';
      navbar.style.padding = '20px 10%';
    }
  });

  // Mock Reservation Submission
  const resForm = document.getElementById('res-form');
  resForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = resForm.querySelector('.submit-btn');
    submitBtn.innerText = 'Enviando...';
    submitBtn.disabled = true;

    // Simulate API call to backend.A
    setTimeout(() => {
      alert('¡Reserva confirmada! Te hemos enviado un correo con los detalles.');
      resForm.reset();
      submitBtn.innerText = 'Confirmar Reserva';
      submitBtn.disabled = false;
    }, 1500);
  });
});