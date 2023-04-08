class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute("class", "card")

    const cardLeft = document.createElement('div')
    cardLeft.setAttribute("class", "card_left")

    const autor = document.createElement('span');
    autor.textContent = "By " + (this.getAttribute('autor') || "Anonymous")

    const linkTitle = document.createElement('a');
    linkTitle.textContent = this.getAttribute('title')
    linkTitle.href = this.getAttribute('link-url')

    const newsContent = document.createElement('p');
    newsContent.textContent = this.getAttribute('content')

    cardLeft.appendChild(autor)
    cardLeft.appendChild(linkTitle)
    cardLeft.appendChild(newsContent)

    const cardRight = document.createElement('div')
    cardRight.setAttribute("class", "card_right")

    const newsImg = document.createElement('img');
    newsImg.src = this.getAttribute('photo') || "assets/photo_default.jpg";
    newsImg.alt = "Foto noticia"
    cardRight.appendChild(newsImg)

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() { 
    const style = document.createElement('style');

    style.textContent = `
    .card {
      width: 100%;
      height: 250px;
      display: flex;
      flex-direction: row;  
      box-shadow: 5px 5px 5px #ccc;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    
    
    
    .card_left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
    }
    
    .card_left > span {
      font-weight: 400;
    }
    
    .card_left > a {
      text-decoration: none;
      color: #000;
      font-weight: bold;
      margin-top: 15px;
      font-size: 25px;
    }
    
    .card_left > p {
      color: rgb(102, 101, 101);
      
    }
    
    
    .card_right > img {
      max-width: 200px;
      max-height: 200px;
      border-radius: 5px;
      padding: 10px;
    }

    `;


    return style;
  }
}

customElements.define('card-news', CardNews);