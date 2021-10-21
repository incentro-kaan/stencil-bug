import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'wc-child',
  styleUrl: 'wc-child.css',
  shadow: true
})

export class WcChild {
  @Prop() introTitle: string;

  render() {
    return (
      <Host>
        {this.introTitle &&
          <h2>{this.introTitle}</h2>
        }
        <slot></slot>
      </Host>
    );
  }

}
