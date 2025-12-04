import { EventEmitter } from '../../stencil-public-runtime';
export declare class PromericaButton {
    /**
     * Texto que se mostrará dentro del botón.
     */
    label: string;
    /**
     * Determina la variante del botón (primary, secondary, danger).
     */
    variant: 'primary' | 'secondary' | 'danger';
    /**
     * Si es true, el botón se deshabilita.
     */
    disabled: boolean;
    /**
     * Evento emitido cuando el usuario hace clic en el botón.
     */
    btnClick: EventEmitter<void>;
    private handleClick;
    render(): any;
}
