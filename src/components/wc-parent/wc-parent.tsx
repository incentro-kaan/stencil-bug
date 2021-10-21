import { Component, Host, Prop, h } from '@stencil/core';
import { use } from "typescript-mix";
import { PnlWebComponent } from '../abstract/pnl-web-component/pnl-web-component';

@Component({
  tag: 'wc-parent',
  styleUrl: 'wc-parent.css',
  shadow: true,
})

export class WcParent {
  @Prop() contentString?: string;
  @Prop() contentSrc?: string;
  @Prop({ mutable: true }) content?: any;
  @use(PnlWebComponent) this: PnlWebComponent;

  render() {
    return (
      <Host>
        <wc-child intro-title={this.content.introtitle}></wc-child>
        <slot></slot>
      </Host>
    );
  }
}
