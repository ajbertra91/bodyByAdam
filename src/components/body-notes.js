import { LitElement, css, html } from 'lit-element';
// import { classMap } from 'lit-html/directives/class-map';
import { connect } from 'pwa-helpers';
import { store } from '../store/configureStore';
// import { setBodySystem, Filters } from '../actions';

export class BodyNotes extends connect(store)(LitElement) {
    static get styles() {
        return css`
            #body-notes {
                position: absolute;
                top:0;
                left:0;
                right: 0;
                bottom: 0;
                background: rgba(80,80,80,1);
            }
        `;
    }

    static get properties() {
        return {
            currentNote: { type: Object }
        }
    }

    stateChanged(state) {
        this.currentNote = state.notes.filter(note => {
            return note.type === state.bodySystem.selected
        })[0];
    }

    render() {
        return html`
            <div id="body-notes">
                <h1>${this.currentNote.title}</h1>
                <p>${this.currentNote.text}</p>
            </div>
        `;
    }
}
customElements.define('body-notes', BodyNotes);