import { LitElement, css, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { connect } from 'pwa-helpers';
import { store } from '../store/configureStore';
import { setSystemIndicator } from '../actions';

const BODY_SYSTEMS = {
    'SHOW_SKIN': 'skin',
    'SHOW_MUSCLES': 'muscular',
    'SHOW_SKELETON': 'skeletal',
    'SHOW_BLOOD': 'circulatory',
    'SHOW_NERVES': 'nervous'
}

export class BodySystemIndicator extends connect(store)(LitElement) {
    static get styles() {
        return css`
            #body-system-indicator {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;

                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .skin {
                background-image: url('./skin.svg');
                background-size: 200%;
                background-position: 50%;
                background-repeat: no-repeat;
            }
            .muscular {
                background-image: url('./muscular.svg');
                background-size: 200%;
                background-position: 50%;
                background-repeat: no-repeat;
            }
            .circulatory {
                background-image: url('./circulatory.svg');
                background-size: 200%;
                background-position: 50%;
                background-repeat: no-repeat;
            }
            .nervous {
                background-image: url('./nervous.svg');
                background-size: 200%;
                background-position: 50%;
                background-repeat: no-repeat;
            }
            .skeletal {
                background-image: url('./skeletal.svg');
                background-size: 200%;
                background-position: 50%;
                background-repeat: no-repeat;
            }
        `;
    }

    static get properties() {
        return {
            showCss: {type: Boolean}
        }
    }

    stateChanged(state) {
        this.showCss = {
            'skin': state.bodySystem.selected === 'SHOW_SKIN',
            'muscular': state.bodySystem.selected === 'SHOW_MUSCLES',
            'circulatory': state.bodySystem.selected === 'SHOW_BLOOD',
            'nervous': state.bodySystem.selected === 'SHOW_NERVES',
            'skeletal': state.bodySystem.selected === 'SHOW_SKELETON',
        };
    }

    render() {
        return html`
            <div id="body-system-indicator" class="${classMap(this.showCss)}"></div>
        `;
    }
}
customElements.define('body-system-indicator', BodySystemIndicator);