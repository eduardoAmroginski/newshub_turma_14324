// Efeito de esconder o logo ao rolar a página

export const applyHeaderEvents = () => {
    window.addEventListener('scroll', function () {
        const header = document.getElementById('main-header');
        const logo = document.querySelector('.logo');
        const headerBottom = document.querySelector('.header-bottom');

        if (window.scrollY > 100) {
            logo.style.opacity = '0';
            logo.style.visibility = 'hidden';
            headerBottom.style.opacity = '0';
            headerBottom.style.visibility = 'hidden';
            header.style.height = '60px';
        } else {
            logo.style.opacity = '1';
            logo.style.visibility = 'visible';
            headerBottom.style.opacity = '1';
            headerBottom.style.visibility = 'visible';
            header.style.height = '120px';
        }
    });

    // Menu hamburguer mobile
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');

    hamburgerBtn.addEventListener('click', function () {
        mobileNav.classList.toggle('active');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.mobile-menu')) {
            mobileNav.classList.remove('active');
        }
    });

    // Efeito de clique em cards
    document.querySelectorAll('.news-card, .main-news').forEach(card => {
        card.addEventListener('click', function () {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

}