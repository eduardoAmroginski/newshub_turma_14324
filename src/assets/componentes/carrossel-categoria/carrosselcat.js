

// ELEMENTOS
class CarrosselCat extends HTMLElement{
    set data(data){
        this.innerHTML = `<h3 class="section-title">Principais Notícias de Tecnologia</h3>

<div class="carousel-wrapper">

    <button class="nav left">
        <i class="bi bi-chevron-left"></i>
    </button>

    <div class="carousel-container">
        <div class="carousel-track">

            <!-- SLIDES ORIGINAIS -->
            <div class="card" data-link="https://google.com">
                <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="">
                <div class="card-content">
                    <span class="tag">Categoria</span>
                    <h3>Nova geração de smartphones traz recursos inovadores</h3>
                    <p>Fabricantes apresentam câmeras com IA avançada.</p>
                    <span class="meta">13 Out 2025 • 4 min • Mundial</span>
                </div>
            </div>

            <div class="card" data-link="https://google.com">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="">
                <div class="card-content">
                    <span class="tag">Categoria</span>
                    <h3>Pesquisa descobre novos exoplanetas promissores</h3>
                    <p>Telescópios detectam sinais atmosféricos relevantes.</p>
                    <span class="meta">11 Out 2025 • 6 min • Mundial</span>
                </div>
            </div>

            <div class="card" data-link="https://google.com">
                <img src="https://images.unsplash.com/photo-1500051638674-ff996a0ec29e" alt="">
                <div class="card-content">
                    <span class="tag">Categoria</span>
                    <h3>Nasa anuncia módulo de exploração avançado</h3>
                    <p>Nova geração de sondas poderá viajar mais longe.</p>
                    <span class="meta">10 Out 2025 • 5 min • EUA</span>
                </div>
            </div>

            <div class="card" data-link="https://google.com">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" alt="">
                <div class="card-content">
                    <span class="tag">Categoria</span>
                    <h3>Startup revela bateria com carga instantânea</h3>
                    <p>Tecnologia promete revolucionar veículos elétricos.</p>
                    <span class="meta">09 Out 2025 • 7 min • Europa</span>
                </div>
            </div>

        </div>
    </div>

    <button class="nav right">
        <i class="bi bi-chevron-right"></i>
    </button>

</div>
`
    }
}

customElements.define('carrossel-cat', CarrosselCat)


