class CardNoticias extends HTMLElement {
    set data(noticia) {
        console.log("noticia: ", noticia)
        this.innerHTML=`
        <div class= 'card card-noticias'>
            <div class= 'card-body text-center'>
                <h4 class='card-categoria'>Categoria</h4>
                <p class='card-text text-noticia'>cardcategoria</p>
                <h5 class='card-descricao-noticia'>DecriçãoNoticia</h5>
            </div>
        </div>`;
    }

}

customElements.define("card-noticias", CardNoticias);