// Importa a função que busca as manchetes da API
import { fetchTopHeadlines } from "./service/api.js";

// Seleciona o elemento interno do carrossel (onde os slides serão inseridos)
const carouselInner = document.getElementById("carousel-principal-inner");

async function carregarCarrosselMundial() {

    // Aguarda a resposta da API
    const noticias = await fetchTopHeadlines();

    // Verifica se a API retornou algo
    if (!noticias || noticias.length === 0) {
        console.log("Nenhuma notícia retornada pela API.");
        return; // Sai da função se não houver notícias
    }

    // Limpa qualquer conteúdo anterior do carrossel
    carouselInner.innerHTML = "";

    // Pega só as 5 primeiras notícias e percorre
    noticias.slice(0, 5).forEach((noticia, index) => {

        // Cria a div do item do carrossel
        const item = document.createElement("div");
        item.classList.add("carousel-item");

        // O primeiro item precisa ter a classe "active"
        if (index === 0) item.classList.add("active");

        // Verifica se a imagem existe e é um link válido
        const imagem = noticia.urlToImage && noticia.urlToImage.startsWith("http")
            ? noticia.urlToImage
            : "./src/assets/img/default.jpg"; // Imagem fallback caso não exista

        // Adiciona o conteúdo HTML dentro do slide
        item.innerHTML = `
        <img src="${imagem}" class="d-block w-100" alt="Imagem da notícia">

        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-75 p-3 rounded-3">
            <h5>${noticia.title || "Título indisponível"}</h5>
            <p>${noticia.description && noticia.description !== "[Removed]" ? noticia.description : ""}</p>
        </div>
        `;

        // Leva para notícia completa
        item.style.cursor = "pointer";

        item.addEventListener("click", () => {

            // Prepara objeto com os dados completos da notícia
            const noticiaCompleta = {
                titulo: noticia.title,
                descricao: noticia.description,
                conteudo: noticia.content,
                imagem: noticia.urlToImage,
                url: noticia.url
            };

            // Salva no localStorage para usar na página de notícia
            localStorage.setItem(
                "noticiaSelecionada",
                JSON.stringify(noticiaCompleta)
            );

            // Redireciona para a página da notícia
            window.location.href = "/src/pages/noticia.html";
        });

        // Adiciona o slide no carrossel
        carouselInner.appendChild(item);
    });

    console.log("Carrossel carregado com notícias da API.");
}

// Chama a função para preencher o carrossel quando a página carregar
carregarCarrosselMundial();
