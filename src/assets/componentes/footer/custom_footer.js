export class CustomFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        fetch('/src/assets/componentes/footer/custom_footer.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(err => console.error('Error loading footer:', err));
    }
}

// Register the custom element
customElements.define('custom-footer', CustomFooter);
