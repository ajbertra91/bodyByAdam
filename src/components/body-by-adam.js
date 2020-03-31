import { LitElement, css, html } from 'lit-element';

export class BodyByAdam extends LitElement {
    static get styles() {
        return css`
            main {
                position: absolute;
                top: 0;
                right: 0;
                left: 15vw;
                bottom:0;
                background: rgb(5,12,83);
                background: linear-gradient(180deg, rgba(5,12,83,1) 0%, rgba(30,38,122,1) 100%);
            }
        `;
    }

    render() {
        return html`
            <body-navigation></body-navigation>
            <main role="main">
                <body-notes></body-notes>
                <body-system-indicator></body-system-indicator>
            </main>
        `;
    }
}
customElements.define('body-by-adam', BodyByAdam);