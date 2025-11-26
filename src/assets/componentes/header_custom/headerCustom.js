class HeaderCustom extends HTMLElement {
    set data(data) {
        this.innerHTML = `
        <header id="main-header">
            <div class="header-top">
                <div class="logo">
                    <img src="../../img/nh-logo.png" alt="NewsHub" class="logo-img">
                </div>
                
                <div class="search-container">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Buscar notícias...">
                    </div>
                </div>
            </div>
            
            <div class="header-bottom">
                <nav class="nav-categories">
                    <ul class="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#">Categorias</a></li>
                        <li><a href="#Tecnologia">Tecnologia</a></li>
                        <li><a href="#Jogos">Jogos</a></li>
                        <li><a href="#Negocios">Negócios</a></li>
                        <li><a href="#Ciencia">Ciência</a></li>
                        <li><a href="#Entretenimento">Entretenimento</a></li>
                        <li><a href="#Contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        
        <!-- Menu mobile -->
        <div class="mobile-menu">
            <div class="search-icon-mobile">
                <i class="fas fa-search"></i>
            </div>
            <div class="hamburger" id="hamburger-btn">
                <i class="fas fa-bars"></i>
            </div>
            <div class="mobile-nav" id="mobile-nav">
                <a href="#Home"><i class="fas fa-home"></i> Home</a>
                <a href="#"><i class="fas fa-th-large"></i> Categorias</a>
                <a href="#Tecnologia"><i class="fas fa-microchip"></i> Tecnologia</a>
                <a href="#Jogos"><i class="fas fa-gamepad"></i> Jogos</a>
                <a href="#Negócios"><i class="fas fa-chart-line"></i> Negócios</a>
                <a href="#Ciência"><i class="fas fa-flask"></i> Ciência</a>
                <a href="#Entretenimento"><i class="fas fa-film"></i> Entretenimento</a>
                <a href="#Contato"><i class="fas fa-envelope"></i> Contato</a>
            </div>
        </div>  `
    }
}

customElements.define("header-custom", HeaderCustom);