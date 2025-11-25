// CARROSSEL NACIONAL

// Seleciona o container que faz rolagem horizontal
const carousel = document.getElementById('carouselNacional');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Função que calcula a largura total de um card (largura + margem)
function getCardWidth() {
    const card = carousel.querySelector('.news-card');

    if (!card) return 0;
    const style = window.getComputedStyle(card);
    const gap = parseInt(style.marginRight) || 0;
    return card.offsetWidth + gap;
    }

    // Função para ir para o próximo card
    function goToNext() {
    const cardWidth = getCardWidth();
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft + cardWidth >= maxScroll - 10) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
        carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
    }


    // Função para voltar um card
    function goToPrev() {
    const cardWidth = getCardWidth();

    if (carousel.scrollLeft <= 10) {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        carousel.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
        carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
}

// Liga os botões às funções
nextBtn.addEventListener("click", goToNext);
prevBtn.addEventListener("click", goToPrev);
