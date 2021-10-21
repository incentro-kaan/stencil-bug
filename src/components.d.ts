/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PnlWebComponent {
        "content"?: any;
        /**
          * @abstract If content-src is provided, content attribute is overwritten with content retrieved from content-src
         */
        "contentSrc"?: string;
        "contentString"?: string;
    }
    interface WcChild {
        "introTitle": string;
    }
    interface WcParent {
        "content"?: any;
        "contentSrc"?: string;
        "contentString"?: string;
    }
}
declare global {
    interface HTMLPnlWebComponentElement extends Components.PnlWebComponent, HTMLStencilElement {
    }
    var HTMLPnlWebComponentElement: {
        prototype: HTMLPnlWebComponentElement;
        new (): HTMLPnlWebComponentElement;
    };
    interface HTMLWcChildElement extends Components.WcChild, HTMLStencilElement {
    }
    var HTMLWcChildElement: {
        prototype: HTMLWcChildElement;
        new (): HTMLWcChildElement;
    };
    interface HTMLWcParentElement extends Components.WcParent, HTMLStencilElement {
    }
    var HTMLWcParentElement: {
        prototype: HTMLWcParentElement;
        new (): HTMLWcParentElement;
    };
    interface HTMLElementTagNameMap {
        "pnl-web-component": HTMLPnlWebComponentElement;
        "wc-child": HTMLWcChildElement;
        "wc-parent": HTMLWcParentElement;
    }
}
declare namespace LocalJSX {
    interface PnlWebComponent {
        "content"?: any;
        /**
          * @abstract If content-src is provided, content attribute is overwritten with content retrieved from content-src
         */
        "contentSrc"?: string;
        "contentString"?: string;
    }
    interface WcChild {
        "introTitle"?: string;
    }
    interface WcParent {
        "content"?: any;
        "contentSrc"?: string;
        "contentString"?: string;
    }
    interface IntrinsicElements {
        "pnl-web-component": PnlWebComponent;
        "wc-child": WcChild;
        "wc-parent": WcParent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pnl-web-component": LocalJSX.PnlWebComponent & JSXBase.HTMLAttributes<HTMLPnlWebComponentElement>;
            "wc-child": LocalJSX.WcChild & JSXBase.HTMLAttributes<HTMLWcChildElement>;
            "wc-parent": LocalJSX.WcParent & JSXBase.HTMLAttributes<HTMLWcParentElement>;
        }
    }
}
