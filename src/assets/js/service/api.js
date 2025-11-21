const API_KEY = "1a9ec140ecc94bee9c1ab040dee469da";

// Declara uma função assíncrona que busca as principais manchetes (top headlines).
// O uso de "export" permite que essa função seja importada e utilizada em outros arquivos JS.
export async function fetchTopHeadlines() {
  try {
    // Monta a URL do endpoint da NewsAPI, incluindo o país (us = Estados Unidos)
    // e a chave da API como parâmetro de autenticação.
    const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    // Faz a requisição HTTP utilizando a função fetch(), que retorna uma Promise.
    // Como a função é assíncrona, usamos "await" para aguardar a resposta.
    const response = await fetch(endpoint);

    // Verifica se a resposta foi bem-sucedida (status 200–299).
    // Caso contrário, lança um erro para ser capturado no bloco catch.
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    // Converte a resposta da API, que vem em formato JSON, para um objeto JavaScript.
    const data = await response.json();

    // Retorna o array de artigos de notícias contido na resposta.
    // Cada elemento do array representa uma notícia (título, descrição, fonte, etc).
    return data.articles;
  } catch (error) {
    // Caso ocorra algum erro durante a requisição ou conversão do JSON,
    // exibe uma mensagem de erro no console.
    console.log("Não foi possivel carregar as noticia principais");
  }
}

export async function fetchEverything(searchText, pageSize=4, nextPage=1) {
  
  try {

const endpoint = `https://newsapi.org/v2/everything?q=${searchText}&page=${nextPage}&pageSize=${pageSize}&apiKey=${API_KEY}`;

const response = await fetch(endpoint);

if (!response.ok) {
  throw new Error("Erro na requisição");
}

const data = await response.json();

return data.articles;
  } catch (error) {

    console.log("Não foi possivel carregar a busca solicitada");
  }
}
