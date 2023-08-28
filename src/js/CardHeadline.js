class CardHeadline extends HTMLElement{
    constructor() {
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
        
    }

    build() {
        const componentRoot = document.createElement("div")
        componentRoot.className = "card-container"

        const cardContent = document.createElement("div")
        const imageContainer = document.createElement("div")
        const image = document.createElement("img")
        const headlineContainer = document.createElement("div")
        const headline = document.createElement("h1")
        const headlineAuthor = document.createElement("span")
        const divisor = document.createElement("hr")

        cardContent.className = "card-content"
        imageContainer.className = "card-image"
        headlineContainer.className = "card-headline"
        headline.className = "headline-title"
        headlineAuthor.className = "headline-author"
        divisor.className = "card-divisor"

        image.src = this.getAttribute("imagePath") || "images/image-not-found.jpg"
        headline.innerText = this.getAttribute("headline")
        headlineAuthor.innerText = "Por " + (this.getAttribute("author") || "Anônimo")

        imageContainer.appendChild(image)
        headlineContainer.appendChild(headline)
        headlineContainer.appendChild(headlineAuthor)

        cardContent.appendChild(imageContainer)
        cardContent.appendChild(headlineContainer)

        componentRoot.appendChild(cardContent)
        componentRoot.appendChild(divisor)
        
        return componentRoot
    }

    style() {
        const style = document.createElement("style")

        style.innerText = `
        /* CARD STYLE */

        .card-container {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            margin: 0.656rem auto;
        }
        
        .card-content {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .625rem;
            padding: 0.625rem;
        }
        
        .card-image {
            display: flex;
            flex: .75;
            justify-content: center;
        }
        
        .card-image img {
            height: 8.75rem;
            object-fit: cover;
            border-radius: .938rem;
        }
        
        .headline-title {
            font-size: 1.75rem;
        } 
        
        .headline-author {
            font-size: .875rem;
        }

        .card-divisor {
            background: grey;
            width: 95%;
            height: .001rem;
            margin: auto;
        }

        @media screen and (max-width: 576px) {
            .card-container {
                max-width: 576px;
            }
        }
        @media screen and (min-width: 768px) {
            .card-container {
                max-width: 768px;
                flex: 2;
            }
        }
        @media screen and (min-width: 992px) {
            .card-container {
                max-width: 992px;
            }
        }
        `

        return style
    }
}
customElements.define("headline-card", CardHeadline)