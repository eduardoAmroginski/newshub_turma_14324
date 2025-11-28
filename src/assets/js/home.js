// Carrosel Nacional

// Seleciona o container que tem rolagem horizontal (onde ficam os cards)
const carousel = document.getElementById('carouselNacional');

// Botões de avançar e voltar
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');


// Função largura + margem direita (gap entre cards)
function getCardWidth() {

    // Pega o primeiro card dentro do carrossel
    const card = carousel.querySelector('.news-card');

    // Se não existir card, devolve 0 para evitar erro
    if (!card) return 0;

    // Pega estilos computados do card
    const style = window.getComputedStyle(card);

    // Converte a margem direita para número (caso exista)
    const gap = parseInt(style.marginRight) || 0;

    // Retorna a largura total do card + margem
    return card.offsetWidth + gap;
}


// Função rolar para a direita
function goToNext() {
    const cardWidth = getCardWidth(); // largura total de 1 card
    const maxScroll = carousel.scrollWidth - carousel.clientWidth; // scroll máximo possível

    // Se está no final → volta para o começo
    if (carousel.scrollLeft + cardWidth >= maxScroll - 10) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
    } 
    // Caso contrário, avança 1 card
    else {
        carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
}

// Função rolar para a esquerda
function goToPrev() {
    const cardWidth = getCardWidth(); // largura total de 1 card

    // Se está no começo → vai para o final
    if (carousel.scrollLeft <= 10) {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        carousel.scrollTo({ left: maxScroll, behavior: "smooth" });
    } 
    // Caso contrário, volta 1 card
    else {
        carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
}

nextBtn.addEventListener("click", goToNext); // botão avançar
prevBtn.addEventListener("click", goToPrev); // botão voltar
