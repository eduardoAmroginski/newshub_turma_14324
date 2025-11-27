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
    const searchBtnMobile = document.getElementById('search-btn-mobile'); // Novo
    const searchMobileContainer = document.getElementById('search-mobile-container'); // Novo

    hamburgerBtn.addEventListener('click', function () {
        mobileNav.classList.toggle('active');
        // Ao abrir o menu, se a pesquisa estiver aberta, feche
        if (searchMobileContainer && searchMobileContainer.style.display !== 'none') {
            searchMobileContainer.style.display = 'none';
        }
    });

    // NOVO: Evento para o botão de pesquisa mobile
    if (searchBtnMobile) {
        searchBtnMobile.addEventListener('click', function () {
            if (searchMobileContainer) {
                // Alterna a exibição da barra de pesquisa (se display for 'none', vira 'block')
                searchMobileContainer.style.display = searchMobileContainer.style.display === 'none' ? 'block' : 'none';
                
                // Feche o menu de navegação mobile se a pesquisa for aberta
                if (searchMobileContainer.style.display === 'block') {
                    mobileNav.classList.remove('active');
                }
            }
        });
    }

    // Fechar menu ao clicar fora
    document.addEventListener('click', function (event) {
        // Obtenha o elemento mais próximo que seja 'mobile-menu'
        const isClickInsideMobileMenu = event.target.closest('.mobile-menu');

        if (!isClickInsideMobileMenu) {
            mobileNav.classList.remove('active');
            // NOVO: Esconde a barra de pesquisa mobile também
            if (searchMobileContainer) {
                searchMobileContainer.style.display = 'none';
            }
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