// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// Nav scroll state
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 80) {
    nav.style.background = 'rgba(248, 250, 253, 0.98)';
  } else {
    nav.style.background = 'rgba(248, 250, 253, 0.94)';
  }
});

// Expandable cards
const isMobile = window.matchMedia('(max-width: 768px)').matches;
const expandableCards = document.querySelectorAll('.expandable-card');

function closeAllCards() {
  expandableCards.forEach(card => {
    card.classList.remove('expanded');
    const icon = card.querySelector('.expandable-card-icon');
    if (icon) icon.textContent = '+';
  });
}

function openCard(card) {
  card.classList.add('expanded');
  const icon = card.querySelector('.expandable-card-icon');
  if (icon) icon.textContent = '−';
}

expandableCards.forEach(card => {
  const header = card.querySelector('.expandable-card-header');
  let hoverTimeout;

  header.addEventListener('click', () => {
    closeAllCards();
    openCard(card);
  });

  if (!isMobile) {
    header.addEventListener('mouseenter', () => {
      hoverTimeout = setTimeout(() => {
        closeAllCards();
        openCard(card);
      }, 150);
    });

    header.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
    });
  }
});
