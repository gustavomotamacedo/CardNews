class Card extends HTMLElement{
    constructor() {
        super();
        const shadowDOM = this.attachShadow({mode: "open"})
        shadowDOM.appendChild(build())
        shadowDOM.appendChild(styles())
    }

    build() {
        const componentRoot = 
    }
    styles() {

    }
}
customElements.define("card", Card)