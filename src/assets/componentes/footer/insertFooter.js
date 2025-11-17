// Importing footer as module custom-footer
import './custom_footer.js';

export const insertFooter = () => {
    const containerFooter = document.getElementById("container-footer-custom")
    const footer = document.createElement("custom-footer")
    footer.data = "teste"
    containerFooter.appendChild(footer)
}

insertFooter()