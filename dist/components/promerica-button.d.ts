import type { Components, JSX } from "../types/components";

interface PromericaButton extends Components.PromericaButton, HTMLElement {}
export const PromericaButton: {
    prototype: PromericaButton;
    new (): PromericaButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
