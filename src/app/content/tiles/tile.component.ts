import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ContentOnCreate, ContentEmbeddable } from '../../reactive-content';

@Component({
  selector: 'rc-tile',
  template: `<div [ngClass]="cssClasses" ><ng-container #embed></ng-container></div>`
})
export class TileComponent implements OnInit, ContentOnCreate, ContentEmbeddable {

  public classes = 'tile';
  public cssClasses: string;

  @ViewChild('embed', {read: ViewContainerRef})
  public embed: ViewContainerRef;

  constructor() { }

  ngOnInit() {
  }

  contentOnCreate(values: { [key: string]: any; }): void {
    const size: string = values.size ? `is-${values.size}` : '';
    const orientation: string = values.orientation ? `is-${values.orientation}` : '';
    const parent: string = values.parent ? 'is-parent' : '';
    this.cssClasses = [this.classes, size , parent , orientation].join(' ');
  }

  contentEmbeddable(): ViewContainerRef {
    return this.embed;
  }

}
