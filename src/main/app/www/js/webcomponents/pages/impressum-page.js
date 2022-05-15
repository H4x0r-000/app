const HTMLComponentBase = require("./../htmlcomponentbase");

class ImpressumPage extends HTMLComponentBase {
    connectedCallback() {
        this.innerHTML = 'Ich bin der Impressum. Guten Tag';
    }
}

window.customElements.define('impressum-page', ImpressumPage);
module.exports = ImpressumPage;