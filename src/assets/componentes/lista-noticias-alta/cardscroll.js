export const applyFunctionListaNoticiaAlta = () => {



document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.noticias-em-alta');
  const flutuante = document.querySelector('.noticias-flutuante');

  if (!card || !flutuante) return;

  // animação de entrada suave
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  setTimeout(() => {
    card.style.transition = 'all 0.6s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 200);

  // mostrar título flutuante conforme o scroll
  window.addEventListener('scroll', () => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 250) {
      flutuante.classList.add('visivel');
    } else {
      flutuante.classList.remove('visivel');
    }
  });
});
// === FIXAR "NOTÍCIAS EM ALTA" ACIMA DA PUBLICIDADE NO MOBILE ===
const noticiasEmAlta = document.querySelector('.noticias-em-alta');
const publicidade = document.querySelector('.advertising-banner');

if (noticiasEmAlta && publicidade) {
  const ajustarPosicaoNoticia = () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // Calcula a posição da publicidade e fixa o card acima dela
      const publicidadeTop = publicidade.getBoundingClientRect().top + window.scrollY;
      const novaPosicao = publicidadeTop - noticiasEmAlta.offsetHeight - 12;

      noticiasEmAlta.style.position = 'absolute';
      noticiasEmAlta.style.top = `${novaPosicao}px`;
      noticiasEmAlta.style.left = '50%';
      noticiasEmAlta.style.transform = 'translateX(-50%)';
      noticiasEmAlta.style.right = 'auto';
      noticiasEmAlta.style.bottom = 'auto';
    } else {
      // No desktop, mantém fixo no canto inferior direito
      noticiasEmAlta.style.position = 'fixed';
      noticiasEmAlta.style.right = '30px';
      noticiasEmAlta.style.bottom = '40px';
      noticiasEmAlta.style.left = 'auto';
      noticiasEmAlta.style.transform = 'none';
      noticiasEmAlta.style.top = 'auto';
    }
  };

  // Ajusta no carregamento e ao redimensionar
  ajustarPosicaoNoticia();
  window.addEventListener('resize', ajustarPosicaoNoticia);

  // Observa mudanças de layout (caso o banner mude de tamanho)
  const observer = new MutationObserver(ajustarPosicaoNoticia);
  observer.observe(publicidade, { childList: true, subtree: true });
}
}