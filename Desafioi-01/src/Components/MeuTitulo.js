class MeuTitulo extends HTMLElement {
  constructor(){
    super();

    const shadow = this.attachShadow({ mode: "open"});

    const componentRoot = document.createElement('h2');
    componentRoot.textContent = this.getAttribute("titulo");


    const style = document.createElement('style');
    style.textContent = `
    h2{
      font-size: 25px;
      color: blue;
    }
    `;

    shadow.appendChild(componentRoot);
    shadow.appendChild(style);

  }
}

customElements.define('meu-titulo', MeuTitulo);