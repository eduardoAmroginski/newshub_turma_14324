import "./script-card-carrossel.js"                                  
import { applyCardCarrossel } from "./card-carrossel.js"
const insertCardCarrossel = () => {
    const container = document.getElementById("container-card-carrossel")

    const listaNoticiasAlta = document.createElement("card-carrossel")
    listaNoticiasAlta.data = "TESTE"
    container.appendChild(listaNoticiasAlta)
    
}
insertCardCarrossel()
applyCardCarrossel()