import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ContentOnCreate, ContentEmbeddable } from '../../reactive-content';

@Component({
  selector: 'rc-tiles',
  template: `<div class="tile is-ancestor"><ng-container #embed></ng-container></div>`
})
export class TilesComponent implements OnInit, ContentOnCreate, ContentEmbeddable {

  @ViewChild('embed', {read: ViewContainerRef})
  public embed: ViewContainerRef;

  constructor() { }

  ngOnInit() {
  }

  contentOnCreate(values: { [key: string]: any; }): void {
    // TODO
  }

  contentEmbeddable(): ViewContainerRef {
    return this.embed;
  }

}
