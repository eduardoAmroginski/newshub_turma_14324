import { fetchTopHeadlines } from "./service/api.js";

const carouselInner = document.getElementById("carousel-principal-inner");

async function carregarCarrosselMundial() {
    const noticias = await fetchTopHeadlines();

    if (!noticias || noticias.length === 0) {
        console.log("Nenhuma notícia retornada pela API.");
        return;
    }

    carouselInner.innerHTML = "";

    noticias.slice(0, 5).forEach((noticia, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) item.classList.add("active");

        const imagem = noticia.urlToImage && noticia.urlToImage.startsWith("http")
        ? noticia.urlToImage
        : "./src/assets/img/default.jpg";


        item.innerHTML = `
        <img src="${imagem}" class="d-block w-100" alt="Imagem da notícia">

        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-75 p-3 rounded-3">
            <h5>${noticia.title || "Título indisponível"}</h5>
            <p>${noticia.description && noticia.description !== "[Removed]" ? noticia.description : ""}</p>
        </div>
        `;

        //Direcionamento Noticia Completa
        item.style.cursor = "pointer";

        item.addEventListener("click", () => {
        const noticiaCompleta = {
            titulo: noticia.title,
            descricao: noticia.description,
            conteudo: noticia.content,
            imagem: noticia.urlToImage,
            url: noticia.url
        };

        // salva no localStorage
        localStorage.setItem(
            "noticiaSelecionada",
            JSON.stringify(noticiaCompleta)
        );

        // redireciona para a página de notícia
        window.location.href = "/src/pages/noticia.html";
        });
        //--------------------------------------

        carouselInner.appendChild(item);
    });

    console.log("Carrossel carregado com notícias da API.");
}

carregarCarrosselMundial();
