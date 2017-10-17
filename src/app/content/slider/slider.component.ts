import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentOnCreate, ContentEmbeddable } from '../../reactive-content';

@Component({
  selector: 'rc-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements ContentOnCreate, ContentEmbeddable {

  @ViewChild('embed', { read: ViewContainerRef })
  public embed: ViewContainerRef;

  constructor(
  ) { }

  contentOnCreate(values: { [key: string]: any; }): void {
    // TODO
  }

  contentEmbeddable(): ViewContainerRef {
    return this.embed;
  }

}
