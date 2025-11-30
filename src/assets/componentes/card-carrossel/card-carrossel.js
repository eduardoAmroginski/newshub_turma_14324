export const applyCardCarrossel = () => {

const carrossel = document.getElementById("carrossel");
const setaEsquerda = document.getElementById("setaEsquerda");
const setaDireita = document.getElementById("setaDireita");

let cards = Array.from(document.querySelectorAll(".carrossel .card"));
const totalCards = cards.length;

// Duplicar primeiro e último card para efeito infinito
const primeiroClone = cards[0].cloneNode(true);
const ultimoClone = cards[cards.length - 1].cloneNode(true);

primeiroClone.classList.add("clone");
ultimoClone.classList.add("clone");

carrossel.appendChild(primeiroClone);
carrossel.insertBefore(ultimoClone, carrossel.firstChild);

// Atualizar lista de cards com os clones
cards = Array.from(document.querySelectorAll(".carrossel .card"));

let index = 1; // Começa no primeiro card “real”

// Quantos cards mudam por clique
let cardsPorClique = window.innerWidth > 768 ? 2 : 1;

// Largura real do card (incluindo margem)
function larguraCard() {
  const style = getComputedStyle(cards[0]);
  const marginRight = parseInt(style.marginRight) || 0;
  return cards[0].offsetWidth + marginRight * 2;
}

// Atualiza posição do carrossel
function atualizarCarrossel(animar = true) {
  if (animar) {
    carrossel.style.transition = "transform 0.6s ease";
  } else {
    carrossel.style.transition = "none";
  }
  const deslocamento = -(index * larguraCard());
  carrossel.style.transform = `translateX(${deslocamento}px)`;
}

// Navegação para direita
setaDireita.addEventListener("click", () => {
  index += cardsPorClique;
  atualizarCarrossel();
});

// Navegação para esquerda
setaEsquerda.addEventListener("click", () => {
  index -= cardsPorClique;
  atualizarCarrossel();
});

// Ajustar após a transição se estiver em um clone
carrossel.addEventListener("transitionend", () => {
  // Se estivermos no clone do primeiro (final)
  if (cards[index].classList.contains("clone") && index >= totalCards + 1) {
    index = 1; // Volta para o primeiro card real
    atualizarCarrossel(false);
  }
  // Se estivermos no clone do último (início)
  if (cards[index].classList.contains("clone") && index === 0) {
    index = totalCards; // Vai para o último card real
    atualizarCarrossel(false);
  }
});

// Recalcular cards por clique e reposicionar ao redimensionar
window.addEventListener("resize", () => {
  cardsPorClique = window.innerWidth > 768 ? 2 : 1;
  atualizarCarrossel(false);
});

// Inicializa posição no primeiro card real
atualizarCarrossel(false);
}









