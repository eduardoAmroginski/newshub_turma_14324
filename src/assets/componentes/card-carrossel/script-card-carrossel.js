class CardCarrossel extends HTMLElement{
    set data(data){
        this.innerHTML = `<section class="carrossel-section">
    <h2 class="titulo-secao"> | Notícias Nacionais</h2>

    <div class="carrossel-wrapper">
      <button class="seta seta-esquerda" id="setaEsquerda">&#10094;</button>

      <div class="carrossel-viewport">
        <div class="carrossel" id="carrossel">
          <!-- ===== CARDS ===== -->
          <div class="card">
            <a href="noticia.html" class="imagem-link">
              <img src="https://picsum.photos/id/1015/800/400" alt="Notícia 1">
              <span class="label-abrangencia">Nacional</span>
            </a>
            <div class="conteudo">
              <a href="categoria.html" class="categoria">Política</a>
              <h3>Título da notícia número 1</h3>
              <p>Resumo breve sobre o conteúdo da notícia e seus destaques principais.</p>
              <p class="data"><i class="bi bi-calendar"></i> 10 Out 2025 &nbsp; <i class="bi bi-clock"></i> 4 min</p>
            </div>
          </div>

          <div class="card">
            <a href="noticia.html" class="imagem-link">
              <img src="https://picsum.photos/id/1025/800/400" alt="Notícia 2">
              <span class="label-abrangencia">Nacional</span>
            </a>
            <div class="conteudo">
              <a href="categoria.html" class="categoria">Economia</a>
              <h3>Título da notícia número 2</h3>
              <p>Resumo breve sobre o conteúdo da notícia e seus destaques principais.</p>
              <p class="data"><i class="bi bi-calendar"></i> 9 Out 2025 &nbsp; <i class="bi bi-clock"></i> 5 min</p>
            </div>
          </div>

          <div class="card">
            <a href="noticia.html" class="imagem-link">
              <img src="https://picsum.photos/id/1035/800/400" alt="Notícia 3">
              <span class="label-abrangencia">Nacional</span>
            </a>
            <div class="conteudo">
              <a href="categoria.html" class="categoria">Cultura</a>
              <h3>Título da notícia número 3</h3>
              <p>Resumo breve sobre o conteúdo da notícia e seus destaques principais.</p>
              <p class="data"><i class="bi bi-calendar"></i> 9 Out 2025 &nbsp; <i class="bi bi-clock"></i> 6 min</p>
            </div>
          </div>

          <div class="card">
            <a href="noticia.html" class="imagem-link">
              <img src="https://picsum.photos/id/1045/800/400" alt="Notícia 4">
              <span class="label-abrangencia">Nacional</span>
            </a>
            <div class="conteudo">
              <a href="categoria.html" class="categoria">Tecnologia</a>
              <h3>Título da notícia número 4</h3>
              <p>Resumo breve sobre o conteúdo da notícia e seus destaques principais.</p>
              <p class="data"><i class="bi bi-calendar"></i> 10 Out 2025 &nbsp; <i class="bi bi-clock"></i> 4 min</p>
            </div>
          </div>

          <div class="card">
            <a href="noticia.html" class="imagem-link">
              <img src="https://picsum.photos/id/1055/800/400" alt="Notícia 5">
              <span class="label-abrangencia">Nacional</span>
            </a>
            <div class="conteudo">
              <a href="categoria.html" class="categoria">Saúde</a>
              <h3>Título da notícia número 5</h3>
              <p>Resumo breve sobre o conteúdo da notícia e seus destaques principais.</p>
              <p class="data"><i class="bi bi-calendar"></i> 9 Out 2025 &nbsp; <i class="bi bi-clock"></i> 6 min</p>
            </div>
          </div>

          <div class="card">
            <a href="noticia.html" class="imagem-link">
              <img src="https://picsum.photos/id/1065/800/400" alt="Notícia 6">
              <span class="label-abrangencia">Nacional</span>
            </a>
            <div class="conteudo">
              <a href="categoria.html" class="categoria">Esportes</a>
              <h3>Título da notícia número 6</h3>
              <p>Resumo breve sobre o conteúdo da notícia e seus destaques principais.</p>
              <p class="data"><i class="bi bi-calendar"></i> 10 Out 2025 &nbsp; <i class="bi bi-clock"></i> 4 min</p>
            </div>
          </div>
        </div>
      </div>

      <button class="seta seta-direita" id="setaDireita">&#10095;</button>
    </div>
  </section>
  `
    }
}

customElements.define('card-carrossel', CardCarrossel)