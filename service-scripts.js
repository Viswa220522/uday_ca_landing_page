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
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  
          function handleCtaPosition() {
      const rightGroup = document.getElementById('desktopCtaContainer');
      const mobileContainer = document.getElementById('mobileCtaContainer');
      if (!rightGroup || !mobileContainer) return;
      
      const isDesktop = window.innerWidth >= 1200;
      
      if (isDesktop) {
        if (!document.getElementById('mainCtaButton')) {
          rightGroup.innerHTML = '<a href="#contact" class="nav-cta" id="mainCtaButton">Book Consultation</a>';
          mobileContainer.innerHTML = '';
          console.log('[Navbar] CTA Active: Desktop Button (Right)');
        }
      } else {
        if (!document.getElementById('mobileCtaLink')) {
          mobileContainer.innerHTML = '<a href="#contact" id="mobileCtaLink">Book Consultation &#8599;</a>';
          rightGroup.innerHTML = '';
          console.log('[Navbar] CTA Active: Plain Nav Link (Inside Menu)');
        }
      }
    }
    window.addEventListener('resize', handleCtaPosition);
    handleCtaPosition();

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mainNav.classList.toggle('menu-open');
    });

    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && mainNav.classList.contains('menu-open')) {
        mainNav.classList.remove('menu-open');
      }
    });

    document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth < 1200) {
          e.preventDefault();
          trigger.closest('.dropdown').classList.toggle('active');
        }
      });
    });
  }
});
