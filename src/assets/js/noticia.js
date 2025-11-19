// PEGAR O ID DA URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// BANCO DE NOTÍCIAS
const noticias = {
    mundial1: {
        titulo: "Inteligência Artificial transforma a indústria tech",
        imagem: "../img/Mundial1.jpg",
        conteudo: `
            Empresas de tecnologia investem bilhões em IA generativa e machine learning,
            prometendo revolucionar diversos setores da economia global.
        `
    },

    mundial2: {
        titulo: "Novo RPG de mundo aberto quebra recordes de vendas",
        imagem: "../img/Mundial2.jpg",
        conteudo: `
            Lançamento surpreende mercado com mecânicas inovadoras e gráficos de última geração.
        `
    },

    nacional1: {
        titulo: "Startup brasileira cria solução inovadora em blockchain",
        imagem: "../img/Nacional1.jpg",
        conteudo: `
            Empresa nacional recebe investimento milionário para expandir plataforma.
        `
    },

    regional1: {
        titulo: "Hub de inovação em São Paulo atrai empresas",
        imagem: "../img/Regional1.jpg",
        conteudo: `
            Polo tecnológico promete gerar milhares de empregos na capital paulista.
        `
    }
};

// INSERIR NO HTML
const noticia = noticias[id];

if (!noticia) {
    document.getElementById("titulo").innerText = "Notícia não encontrada";
} else {
    document.getElementById("titulo").innerText = noticia.titulo;
    document.getElementById("imagem").src = noticia.imagem;
    document.getElementById("conteudo").innerHTML = noticia.conteudo;
}
