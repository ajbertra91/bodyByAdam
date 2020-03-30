import { LitElement, html } from 'lit-element';

export class BodyByAdam extends LitElement {
    render() {
        return html`
            <p>A paragraph</p>
        `;
    }
}
customElements.define('body-by-adam', BodyByAdam);