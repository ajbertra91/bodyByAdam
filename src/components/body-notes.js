import { LitElement, html } from 'lit-element';

export class BodyNotes extends LitElement {
    render() {
        return html`
            <div>
                NOTES
            </div>
        `;
    }
}
customElements.define('body-notes', BodyNotes);