import { h } from "@stencil/core";
export class PromericaButton {
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
    static get is() { return "promerica-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["promerica-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["promerica-button.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Texto que se mostrar\u00E1 dentro del bot\u00F3n."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'danger'",
                    "resolved": "\"danger\" | \"primary\" | \"secondary\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Determina la variante del bot\u00F3n (primary, secondary, danger)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'primary'"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Si es true, el bot\u00F3n se deshabilita."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "btnClick",
                "name": "btnClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento emitido cuando el usuario hace clic en el bot\u00F3n."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=promerica-button.js.map
