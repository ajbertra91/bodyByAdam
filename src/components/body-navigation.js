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
                top:0;
                left:0;
                right: 85vw;
                bottom: 0;
                overflow: hidden;

                background: rgb(5,12,83);
            }

            ul {
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }
            li {
                list-style: none;
                color: white;
                width: 100%;
                height: 10vh;
                outline: 1px solid red;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            a {
                color: white;
                flex: 1;
                height: 100%;
                width: 100%;
                vertical-align: middle;
                text-align: center;
            }
            .is-active {
                background-color: #025ba2;
            }
        `;
    }

    handleClick(e, bodySystem) {
        e.preventDefault();
        store.dispatch(setBodySystem(bodySystem))
    }

    render() {
        return html`
            <nav id="body-navigation">
                <ul>
                    <li>
                        <a
                            href="#"
                            class="${classMap({ 'is-active': store.getState().bodySystem.selected === Filters.SHOW_CELL })}"
                            @click="${e => this.handleClick(e, Filters.SHOW_CELL)}"
                        >Cell</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="${classMap({ 'is-active': store.getState().bodySystem.selected === Filters.SHOW_BLOOD })}"
                            @click="${e => this.handleClick(e, Filters.SHOW_BLOOD)}
                        ">Blood</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="${classMap({ 'is-active': store.getState().bodySystem.selected === Filters.SHOW_NERVES })}"
                            @click="${e => this.handleClick(e, Filters.SHOW_NERVES)
                    }">Nerves</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="${classMap({ 'is-active': store.getState().bodySystem.selected === Filters.SHOW_SKELETON })}"
                            @click="${e => this.handleClick(e, Filters.SHOW_SKELETON)
                    }">Skeleton</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="${classMap({ 'is-active': store.getState().bodySystem.selected === Filters.SHOW_ORGANS })}"
                            @click="${e => this.handleClick(e, Filters.SHOW_ORGANS)
                    }">Organs</a>
                    </li>
                </ul>
            </nav>
        `;
    }
}
customElements.define('body-navigation', BodyNavigation);