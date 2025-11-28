class ListaNoticiasAlta extends HTMLElement{
    set data(data){
        this.innerHTML = `
            <div class="noticias-em-alta">
  <h3 class="noticias-titulo">Em Alta</h3>
  <ul class="noticias-lista">
    <li>
      <a href="./src/pages/noticia.html">
        <span class="numero">1</span>
        <div class="conteudo">
          <p class="titulo">Apple anuncia evento especial para próxima semana</p>
          <p class="categoria">Tecnologia</p>
        </div>
        <span class="seta">→</span>
      </a>
    </li>
    <li>
      <a href="./src/pages/noticia.html">
        <span class="numero">2</span>
        <div class="conteudo">
          <p class="titulo">Netflix revela novos lançamentos para outubro</p>
          <p class="categoria">Entretenimento</p>
        </div>
        <span class="seta">→</span>
      </a>
    </li>
    <li>
      <a href="./src/pages/noticia.html">
        <span class="numero">3</span>
        <div class="conteudo">
          <p class="titulo">Tesla apresenta novo modelo de carro elétrico</p>
          <p class="categoria">Negócios</p>
        </div>
        <span class="seta">→</span>
      </a>
    </li>
    <li>
      <a href="./src/pages/noticia.html">
        <span class="numero">4</span>
        <div class="conteudo">
          <p class="titulo">Amazon expande operações no Brasil</p>
          <p class="categoria">Negócios</p>
        </div>
        <span class="seta">→</span>
      </a>
    </li>
    <li>
      <a href="./src/pages/noticia.html">
        <span class="numero">5</span>
        <div class="conteudo">
          <p class="titulo">Meta desenvolve novo headset de realidade virtual</p>
          <p class="categoria">Tecnologia</p>
        </div>
        <span class="seta">→</span>
      </a>
    </li>
  </ul>
</div>
        `
    }
}

customElements.define('noticias-alta', ListaNoticiasAlta)