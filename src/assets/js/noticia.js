// PEGAR O ID DA URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// BANCO DE NOTÍCIAS
const noticias = {
    mundial1: {
        titulo: "Inteligência Artificial transforma a indústria tech",
        imagem: "/src/assets/img/Mundial1.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    mundial2: {
        titulo: "Novo RPG de mundo aberto quebra recordes de vendas",
        imagem: "/src/assets/img/Mundial2.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    mundial3: {
        titulo: "Missão espacial histórica prepara nova era da exploração lunar",
        imagem: "/src/assets/img/Mundial3.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    mundial4: {
        titulo: "Realidade virtual redefine experiência de entretenimento digital",
        imagem: "/src/assets/img/Mundial4.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    mundial5: {
        titulo: "Veículos elétricos dominam mercado automotivo global",
        imagem: "/src/assets/img/Mundial5.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    nacional1: {
        titulo: "Startup brasileira desenvolve solução inovadora em blockchain",
        imagem: "/src/assets/img/Nacional1.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    nacional2: {
        titulo: "Mercado brasileiro de e-commerce cresce 25% no último trimestre",
        imagem: "/src/assets/img/Nacional2.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    nacional3: {
        titulo: "Desenvolvedores brasileiros lançam jogo indie premiado internacionalmente",
        imagem: "/src/assets/img/Nacional3.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    nacional4: {
        titulo: "Cientistas brasileiros fazem descoberta importante sobre Amazônia",
        imagem: "/src/assets/img/Nacional4.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    nacional5: {
        titulo: "Cinema nacional bate recordes de bilheteria neste ano",
        imagem: "/src/assets/img/Nacional5.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    regional1: {
        titulo: "Hub de inovação em São Paulo atrai empresas",
        imagem: "/src/assets/img/Regional1.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    regional2: {
        titulo: "Empresas do Sul do Brasil expandem exportações para América Latina",
        imagem: "/src/assets/img/Regional2.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    regional3: {
        titulo: "Universidade do Rio desenvolve vacina experimental promissora",
        imagem: "/src/assets/img/Regional3.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    regional4: {
        titulo: "Festival de música reúne milhares em Minas Gerais",
        imagem: "/src/assets/img/Regional4.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    alta1: {
        titulo: "Apple anuncia evento especial",
        imagem: "/src/assets/img/Alta1.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    alta2: {
        titulo: "Netflix revela lançamentos de outubro",
        imagem: "/src/assets/img/Alta2.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    alta3: {
        titulo: "Tesla apresenta novo carro elétrico",
        imagem: "/src/assets/img/Alta3.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    alta4: {
        titulo: "Amazon expande operações no Brasil",
        imagem: "/src/assets/img/Alta4.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    alta5: {
        titulo: "Meta desenvolve novo headset de realidade virtual",
        imagem: "/src/assets/img/Alta5.jpg",
        conteudo: `
            Notícia Completa
        `
    },
};