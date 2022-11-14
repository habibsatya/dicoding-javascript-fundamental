class LogoWeb extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = "<h1> The-C19 </h1>";
    }
}

customElements.define("logo-web", LogoWeb);