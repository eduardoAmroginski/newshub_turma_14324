// noticia.js

// Pega a notícia salva no localStorage
const noticiaJSON = localStorage.getItem("noticiaSelecionada");

if (!noticiaJSON) {
    document.getElementById("titulo").innerText = "Notícia não encontrada";
    } else {
    const noticia = JSON.parse(noticiaJSON);

    // Preenche os elementos da página
    document.getElementById("titulo").innerText = noticia.titulo;

    document.getElementById("imagem").src =
        noticia.imagem || "../assets/img/default.jpg";

    document.getElementById("conteudo").innerHTML =
        noticia.conteudo ||
        noticia.descricao ||
        "Conteúdo completo não disponível.";
}
