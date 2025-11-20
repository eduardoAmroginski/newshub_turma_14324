import { fetchEverything } from "./api.js";

const proximabusca=await fetchEverything("esportes",2)
console.log("proximabusca: ",proximabusca)