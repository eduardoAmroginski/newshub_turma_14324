// ======= CARROSSEL HORIZONTAL - NOTÍCIAS NACIONAIS =======

const carousel = document.getElementById('carouselNacional');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Pega o tamanho de um card incluindo margin/gap
  function getCardWidth() {
  const card = carousel.querySelector('.news-card');
  if (!card) return 0;
  const style = window.getComputedStyle(card);
  const gap = parseInt(style.marginRight) || 0;
  return card.offsetWidth + gap;
}

nextBtn.addEventListener('click', () => {
  const cardWidth = getCardWidth();
  carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  const cardWidth = getCardWidth();
  carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

