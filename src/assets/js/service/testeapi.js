import { fetchTopHeadlines } from "./api.js";

const noticiasdestaque=await fetchTopHeadlines()
console.log("noticiasdestaque: ", noticiasdestaque)