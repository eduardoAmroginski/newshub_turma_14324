export default class Utils {

    // Função para pegar um parâmetro da URL
    // Exemplo: se a URL for ?title=Notícia+Legal
    // getParamFromURL("title") vai retornar "Notícia Legal"
    static getParamFromURL = (paramName) => {

        // Pega todos os parâmetros que estão na URL
        const urlParams = new URLSearchParams(window.location.search);

        // Busca o valor do parâmetro que queremos
        const newsTitle = urlParams.get(paramName);

        // Retorna esse valor
        return newsTitle;
    } 

    // Função para procurar e retornar um único artigo pelo título
    static filterByTitle = (title, articleList) => {

        // Procura dentro da lista de artigos
        // find() retorna o primeiro artigo que tiver o título igual ao informado
        const article = articleList.find((item) => item.title == title);

        // Retorna o artigo encontrado (ou undefined se não existir)
        return article;
    }
    
}
