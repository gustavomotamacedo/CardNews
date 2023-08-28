class CardWeather extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: "open"})

        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
    }

    build() {
        const componentRoot = document.createElement("div")
        componentRoot.className = "weather-container"

        const weatherContent = document.createElement("div")
        // div span div span span
        const imageContainer = document.createElement("div")
        const image = document.createElement("img")
        const description = document.createElement("span")
        const detailsContainer = document.createElement("div")
        const detailsTemp = document.createElement("span")
        const detailsRain = document.createElement("span")

        weatherContent.className = "weather-content"
        imageContainer.className = "today-image"
        description.className = "today-description"
        detailsContainer.className = "today-details"
        detailsTemp.className = "details-temp"
        detailsRain.className = "details-rain"

        image.src = this.getAttribute("imagePath") || "images/image-not-found.jpg"
        description.innerText = this.getAttribute("description")
        detailsTemp.innerText = this.getAttribute("temperature")
        detailsRain.innerText = this.getAttribute("rain")

        imageContainer.appendChild(image)
        detailsContainer.appendChild(detailsTemp)
        detailsContainer.appendChild(detailsRain)
        
        weatherContent.appendChild(imageContainer)
        weatherContent.appendChild(description)
        weatherContent.appendChild(detailsContainer)
        
        componentRoot.appendChild(weatherContent)

        return componentRoot
    }

    style() {
        const style = document.createElement("style")
        style.innerText = `
        .weather-container {
            margin: auto;
            padding: 0.625rem;
            background-image: linear-gradient(to bottom, #befdfd, #b1b9c4);
            border-radius: .625rem;
        }
        
        .weather-content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
        
        .today-image {
            align-self: center; 
            justify-self: center;
        }
        
        .today-image img {
            max-width: 100px;
        }
        
        .today-description {
            align-self: center;
            margin-left: .625rem;
            font-weight: 700;
            font-size: 1.2rem;
            letter-spacing: .15rem;
        }
        
        .today-details {
            display: flex;
            flex-direction: column;
            align-self: center;
            line-height: 2rem;
            text-align: right;
            font-weight: 500;
            padding: 0 2rem;
        }

        @media screen and (max-width: 576px) {
            .weather-container {
                max-width: 576px;
            }
        }
        @media screen and (min-width: 768px) {
            .weather-container {
                max-width: 768px;
            }
        }
        @media screen and (min-width: 992px) {
            .weather-container {
                max-width: 992px;
            }
        }
        `

        return style
    }
}
customElements.define("weather-card", CardWeather)