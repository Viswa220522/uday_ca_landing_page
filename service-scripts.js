document.addEventListener('DOMContentLoaded', () => {
  // Reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Accordion logic
  document.querySelectorAll('.expandable-card-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.parentElement;
      const isActive = card.classList.contains('active');
      
      // Close all cards
      document.querySelectorAll('.expandable-card').forEach(c => c.classList.remove('active'));
      
      if (!isActive) {
        card.classList.add('active');
      }
    });
  });
});
