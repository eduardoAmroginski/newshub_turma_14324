class CardNoticias extends HTMLElement {
    set data(noticia) {
        console.log("noticia: ", noticia)
        this.innerHTML=`
         <div class="card h-100 tamanhocard">
            <a class="cardquadrado" href="#">
                <div class="container-imagem">
                    <img src="https://placehold.co/600x400" class="card-img-top " alt="...">
                </div>
                <div class="card-corpo">
                    <h6><span class="badge text-bg-custom">Tecnologia</span></h6>
                    <h1 class="title-noticia">Card title</h1>
                    <p class="text-noticia">This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer.</p>
                        <h6 class="data"><i class="bi bi-calendar-check"></i> 27/11/2025 <i class="bi bi-clock"></i> 10h:30min </h6>
                         
                        
                </div>
            </a>
        </div>`;
    }

}

customElements.define("card-noticias", CardNoticias);