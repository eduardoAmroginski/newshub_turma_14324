import "./carrosselcat.js"
import { applyCarrosselCat } from "./function-carrossel-categoria.js"

const insertCarrosselCat= async() => {
    const container = document.getElementById("container-carrossel-cat")

    const carrosselCat = document.createElement("carrossel-cat")
    carrosselCat.data = "TESTE"
   await container.appendChild(carrosselCat)
    
}

await insertCarrosselCat()
applyCarrosselCat()