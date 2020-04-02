import { LitElement, css, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { connect } from 'pwa-helpers';
import { store } from '../store/configureStore';
import { setBodySystem, Filters } from '../actions';

export class BodyNavigation extends connect(store)(LitElement) {
    static get styles() {
        return css`
            #body-navigation {
                position: absolute;
                top:90vh;
                left:0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                background: #145a7b;
            }

            ul {
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: row;
                align-items: flex-end;
            }
            li {
                list-style: none;
                color: white;
                width: 100%;
                height: 10vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .is-active {
                background: cyan;
                transition: background 0.3s ease;
            }
            .is-active svg {
                fill: currentColor;
            }
            a {
                color: white;
                flex: 1;
                height: 100%;
                width: 100%;
                line-height: 10vh;
                vertical-align: middle;
                text-align: center;
            }
        `;
    }

    handleClick(e, bodySystem) {
        e.preventDefault();
        store.dispatch(setBodySystem(bodySystem))
    }

    stateChanged() {
        this.selectedSystem = store.getState().bodySystem.selected;
        this.requestUpdate();
    }

    render() {
        return html`
            <nav id="body-navigation">
                <ul>
                    <li class="${classMap({ 'is-active': this.selectedSystem === Filters.SHOW_SKIN })}">
                        <a
                            href="#"
                            class="skin"
                            @click="${e => this.handleClick(e, Filters.SHOW_SKIN)}"
                        >Skin</a>
                    </li>
                    <li class="${classMap({ 'is-active': this.selectedSystem === Filters.SHOW_MUSCLES })}">
                        <a
                            href="#"
                            class="muscles"
                            @click="${e => this.handleClick(e, Filters.SHOW_MUSCLES)}
                        ">Muscles</a>
                    </li>
                    <li class="${classMap({ 'is-active': this.selectedSystem === Filters.SHOW_BLOOD })}">
                        <a
                            href="#"
                            class="organs"
                            @click="${e => this.handleClick(e, Filters.SHOW_BLOOD)
                    }">Blood</a>
                    </li>
                    <li class="${classMap({ 'is-active': this.selectedSystem === Filters.SHOW_NERVES })}">
                        <a
                            href="#"
                            class="nerves"
                            @click="${e => this.handleClick(e, Filters.SHOW_NERVES)
                    }">Nerves</a>
                    </li>
                    <li class="${classMap({ 'is-active': this.selectedSystem === Filters.SHOW_SKELETON })}">
                        <a
                            href="#"
                            class="bones"
                            @click="${e => this.handleClick(e, Filters.SHOW_SKELETON)
                    }">Skeleton</a>
                    </li>
                </ul>
            </nav>
        `;
    }
}
customElements.define('body-navigation', BodyNavigation);