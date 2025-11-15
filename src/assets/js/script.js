// ======= CARROSSEL HORIZONTAL - LOOP CORRETO =======

const carousel = document.getElementById('carouselNacional');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// largura de um card
function getCardWidth() {
  const card = carousel.querySelector('.news-card');
  if (!card) return 0;
  const style = window.getComputedStyle(card);
  const gap = parseInt(style.marginRight) || 0;
  return card.offsetWidth + gap;
}

function goToNext() {
  const cardWidth = getCardWidth();
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  // Se estiver muito perto do final → volta para o início
  if (carousel.scrollLeft + cardWidth >= maxScroll - 10) {
    carousel.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
  }
}

function goToPrev() {
  const cardWidth = getCardWidth();

  // Se estiver muito perto do início → pula para o final
  if (carousel.scrollLeft <= 10) {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollTo({ left: maxScroll, behavior: "smooth" });
  } else {
    carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
  }
}

nextBtn.addEventListener("click", goToNext);
prevBtn.addEventListener("click", goToPrev);
