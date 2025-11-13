class CardNoticias extends HTMLElement {
    set data(noticia) {
        console.log("noticia: ", noticia)
        this.innerHTML=`
        <div class= 'card'>
            <div class= 'card-body text-center'>
                <h4 class='card-categoria'>Categoria</h4>
                <p class='card-text'>cardcategoria</p>
                <h5 class='card-descricao-noticia'>DecriçãoNoticia</h5>
            </div>
        </div>`;
    }

}

customElements.define("card-noticias", CardNoticias);