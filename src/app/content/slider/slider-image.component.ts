import { Component, OnInit, Input } from '@angular/core';
import { ContentOnCreate } from '../../reactive-content';

@Component({
  selector: 'rc-slider-image',
  template: `<img [attr.src]="src" [attr.alt]="alt">`,
  styleUrls: ['./slider-image.component.scss']
})
export class SliderImageComponent implements OnInit, ContentOnCreate {

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
  }

}
