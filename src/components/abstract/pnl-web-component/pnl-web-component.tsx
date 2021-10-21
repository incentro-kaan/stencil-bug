import { Component, Prop, Watch } from '@stencil/core';

/**
 * @abstract Generic web component
 */
@Component({
  tag: 'pnl-web-component',
  shadow: true,
})
export class PnlWebComponent {
  // This should be a class that can be inherited from, but this is not possible in stenciljs
  // Instead an @use decorator is used from npm package typescript-mix
  // See: https://github.com/ionic-team/stencil/issues/1060
  @Prop() contentString?: string;
  /** 
   * @abstract If content-src is provided, content attribute is overwritten with content
   * retrieved from content-src
   */
  @Prop() contentSrc?: string;
  @Prop({mutable: true}) content?: any;

  @Watch('contentString')
  dataDidChangeHandler() {
    this.parseContent();
  }

  parseContent() {
    if(this.contentString) {
      this.content = JSON.parse(this.contentString);
    }
  }

  componentWillLoad() {
    this.parseContent();
    if(this.contentSrc) {
      return fetch(this.contentSrc)
        .then(response => response.json())
        .then(data => {
          this.content = data;
        });
    }
  }
}
