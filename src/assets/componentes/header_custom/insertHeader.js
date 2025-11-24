import "./headerCustom.js";
import { applyHeaderEvents } from "./headerFunctions.js";


const insertHeader = () => {
    const container = document.getElementById("header-container");

    const header = document.createElement("header-custom");
    header.data = "Teste";

    container.appendChild(header);
}

insertHeader();
applyHeaderEvents()