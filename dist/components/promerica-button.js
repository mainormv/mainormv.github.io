import { p as proxyCustomElement, H, c as createEvent, h } from './p-DNbERovR.js';

const promericaButtonCss = ".btn-base{padding:10px 20px;border:none;border-radius:5px;cursor:pointer;font-weight:bold;transition:background-color 0.3s ease, opacity 0.3s ease;display:inline-flex;align-items:center;justify-content:center;font-size:1rem}.btn-base:focus{outline:none;box-shadow:0 0 0 3px rgba(0, 102, 204, 0.4);}.btn-primary{background-color:#0066cc;color:white}.btn-primary:hover:not(:disabled){background-color:#0056b3;}.btn-secondary{background-color:#f0f0f0;color:#333;border:1px solid #ccc}.btn-secondary:hover:not(:disabled){background-color:#e0e0e0}.btn-danger{background-color:#dc3545;color:white}.btn-danger:hover:not(:disabled){background-color:#c82333}.btn-base:disabled{cursor:not-allowed;opacity:0.6}";

const PromericaButton$1 = /*@__PURE__*/ proxyCustomElement(class PromericaButton extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.btnClick = createEvent(this, "btnClick");
    }
    /**
     * Texto que se mostrará dentro del botón.
     */
    label;
    /**
     * Determina la variante del botón (primary, secondary, danger).
     */
    variant = 'primary';
    /**
     * Si es true, el botón se deshabilita.
     */
    disabled = false;
    /**
     * Evento emitido cuando el usuario hace clic en el botón.
     */
    btnClick;
    handleClick = () => {
        if (!this.disabled) {
            this.btnClick.emit();
        }
    };
    render() {
        // Usamos las propiedades 'variant' y 'disabled' como clases CSS para estilizar
        return (h("button", { key: 'c619abfed3c380f5af5a814463b56265368cf0f3', class: `btn-base btn-${this.variant}`, disabled: this.disabled, onClick: this.handleClick }, this.label || 'Botón'));
    }
    static get style() { return promericaButtonCss; }
}, [769, "promerica-button", {
        "label": [1],
        "variant": [1],
        "disabled": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["promerica-button"];
    components.forEach(tagName => { switch (tagName) {
        case "promerica-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PromericaButton$1);
            }
            break;
    } });
}
defineCustomElement$1();

const PromericaButton = PromericaButton$1;
const defineCustomElement = defineCustomElement$1;

export { PromericaButton, defineCustomElement };
//# sourceMappingURL=promerica-button.js.map

//# sourceMappingURL=promerica-button.js.map