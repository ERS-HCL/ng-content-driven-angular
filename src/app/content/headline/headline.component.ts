import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ContentOnCreate } from '../../reactive-content';

@Component({
  selector: 'rc-headline',
  template: `<div [ngClass]="containerCss" ><h1 [ngClass]="cssClasses">{{ text }}</h1></div>`
})
export class HeadlineComponent implements OnInit, ContentOnCreate {


  public cssClasses: string;
  public containerCss: string;

  @Input()
  public text: string;

  constructor() { }

  ngOnInit() {
  }

  contentOnCreate(values: { [key: string]: any; }): void {
    this.text = values.text;
    const clazz: string = values.class ? values.class : 'title';
    const size: string = values.size ? `is-${values.size}` : '';
    const box: string = values.box ? 'box' : '';
    this.cssClasses = [clazz, size].join(' ');
    this.containerCss = [box].join(' ');
  }

}
