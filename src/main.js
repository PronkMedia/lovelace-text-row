import {LitElement, html, css} from 'card-tools/src/lit-element.js';
import {version} from '../package.json';

const ERROR_MESSAGE = "TEXT-ROW: Error in card configuration.";

class TextRow extends LitElement {

  setConfig(config) {
    if (!config) {
      throw new Error(ERROR_MESSAGE);
    }

    this._config = config;
  }

  mapStyles(styleConfig = {}) {
    return Object.entries(styleConfig).reduce((styles, [property, value]) => {
      property = property.replace(/([A-Z])/g, matches => `-${matches[0].toLowerCase()}`);
      return property in document.body.style ? `${styles}${property}:${value};` : styles;
    }, '');
  }

  render() {
    if (!this._config || !this._config.text) {
      return html`<hui-warning>${ERROR_MESSAGE}</hui-warning>`
    }

    return html`<div style=${this.mapStyles(this._config.style)}>${this._config.text}</div>`;
  }

  static get styles() {
    return css`div { color: var(--primary-text-color); margin-left: 8px; }`;
  }
}

console.info(
  `%c TEXT-ROW %c VERSION ${version} `,
  'color: navy; background: gold; font-weight: bold;',
  'color: gold; background: navy; font-weight: bold;'
);

customElements.define('text-row', TextRow);
