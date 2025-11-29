import {fetchTopHeadlines} from "./service/api.js";

const headlinesArticle = fetchTopHeadlines();

const headlinesTitles = headlinesArticles.title();

for (let i;i<6;i++){
    document.getElementsByClassName("titulo", funtion(){
        document.appendChild(headlinesTitles);
    });
}