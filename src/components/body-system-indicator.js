import { LitElement, css, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { connect } from 'pwa-helpers';
import { store } from '../store/configureStore';
import { setSystemIndicator } from '../actions';

export class BodySystemIndicator extends connect(store)(LitElement) {
    static get styles() {
        return css`
            #body-system-indicator {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: pink;
                transition: transform 0.3s ease-in-out;
                transform: translate3d(-45vw, 35vh, 0) scale(.3);

                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #body-system-indicator.is-active {
                transition: transform 0.3s ease-in-out;
                transform: translate3d(0, 0, 0) scale(1);
            }
            img {
                height: 100%;
            }
        `;
    }

    static get properties() {
        return {
            showCss: {type: Boolean},
            imagePath: {type: String}
        }
    }

    stateChanged(state) {
        this.imagePath = `../assets/${state.bodySystem.selected}.jpg`;
        this.showCss = { 'is-active': state.systemIndicator.filter };
    }

    clickHandler(e) {
        e.preventDefault();
        store.dispatch(setSystemIndicator(!store.getState().systemIndicator.filter));
        this.showCss = { 'is-active': store.getState().systemIndicator.filter };
    }

    render() {
        return html`
            <div id="body-system-indicator" class="${classMap(this.showCss)}" @click="${e => this.clickHandler(e)}">
                <img src="${this.imagePath}" alt="body" />
            </div>
        `;
    }
}
customElements.define('body-system-indicator', BodySystemIndicator);