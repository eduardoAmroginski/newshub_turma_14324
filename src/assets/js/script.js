// ======= CARROSSEL HORIZONTAL - NOTÍCIAS NACIONAIS =======

const carouselNacional = document.getElementById('carouselNacional');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (carouselNacional && nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    carouselNacional.scrollBy({ left: 340, behavior: 'smooth' });
  });
  prevBtn.addEventListener('click', () => {
    carouselNacional.scrollBy({ left: -340, behavior: 'smooth' });
  });
}