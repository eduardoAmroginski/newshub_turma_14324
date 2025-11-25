import "./listaNoticiaAlta.js"                                  
import { applyFunctionListaNoticiaAlta } from "./cardscroll.js"
const insertListaNoticiaAlta = () => {
    const container = document.getElementById("container-noticias-alta")

    const listaNoticiasAlta = document.createElement("noticias-alta")
    listaNoticiasAlta.data = "TESTE"
    container.appendChild(listaNoticiasAlta)
    
}
insertListaNoticiaAlta()
applyFunctionListaNoticiaAlta()