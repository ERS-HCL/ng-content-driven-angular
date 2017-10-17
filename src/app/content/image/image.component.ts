import { Component, OnInit, Input } from '@angular/core';
import { ContentOnCreate } from '../../reactive-content';

@Component({
  selector: 'rc-image',
  template: ` <div class="columns is-mobile">
   <div class="column is-half is-offset-one-quarter">
   <figure class="image" [ngClass]="cssClasses" ><img [attr.src]="src" [attr.alt]="alt"></figure>
  </div>
  </div>`
})
export class ImageComponent implements OnInit, ContentOnCreate {

  public cssClasses: string;

  @Input()
  public src: string;

  @Input()
  public alt: string;

  constructor() { }

  ngOnInit() {
  }

  contentOnCreate(values: { [key: string]: any; }): void {
    this.src = values.src;
    this.alt = values.alt;
    const dimension: string = values.dimension ? `is-${values.dimension}` : '';
    const ratio: string = values.ratio ? `is-${values.ratio}` : '';
    this.cssClasses = [dimension, ratio].join(' ');
  }

}
