export const applyCarrosselCat = () => {
    const track = document.querySelector('.carousel-track');
let slides = Array.from(track.children);

const btnNext = document.querySelector('.nav.right');
const btnPrev = document.querySelector('.nav.left');

let index = 1; // começa no slide "real" após os clones
let width;

// CLONA PRIMEIRO E ÚLTIMO PARA LOOP INFINITO
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.classList.add("clone");
lastClone.classList.add("clone");

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

// Atualiza a lista de slides
slides = Array.from(track.children);

// Ajusta posição inicial
function setPosition() {
    width = slides[1].offsetWidth;
    track.style.transform = `translateX(-${width * index}px)`;
}

// Redimensionamento responsivo
window.addEventListener('resize', () => {
    setPosition();
});

setTimeout(setPosition, 100);

// NAVEGAÇÃO
btnNext.addEventListener('click', () => {
    if (index >= slides.length - 1) return;
    index++;
    move();
});

btnPrev.addEventListener('click', () => {
    if (index <= 0) return;
    index--;
    move();
});

function move() {
    track.style.transition = "transform .45s ease";
    track.style.transform = `translateX(-${width * index}px)`;
}

// LOOP INFINITO
track.addEventListener("transitionend", () => {
    if (slides[index].classList.contains("clone")) {
        track.style.transition = "none";
        index = index === slides.length - 1 ? 1 : slides.length - 2;
        track.style.transform = `translateX(-${width * index}px)`;
    }
});

// CLICAR NO CARD ABRE A PÁGINA
slides.forEach(slide => {
    slide.addEventListener("click", () => {
        const link = slide.getAttribute("data-link");
        if (link) window.location.href = link;
    });
});

}