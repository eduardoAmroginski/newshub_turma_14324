import { fetchEverything } from "./api.js";

const nextpage= await fetchEverything("esportes")
console.log("nextpage: ", await fetchEverything("esportes"))

console.log("nextpage 2: ", await fetchEverything("esportes", 4, 2))