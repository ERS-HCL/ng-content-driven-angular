import { Component, OnInit, Input , HostBinding, ViewChild, ViewContainerRef} from '@angular/core';
import { ContentOnCreate, ContentEmbeddable } from '../../reactive-content';

@Component({
  selector: 'rc-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit, ContentOnCreate , ContentEmbeddable {

  @ViewChild('embed', {read: ViewContainerRef})
  public embed: ViewContainerRef;

  //@HostBinding('class')
  public classes = 'tile is-child notification';

  public cssClasses: string;

  @Input()
  public title: string;

  @Input()
  public subtitle: string;

  @Input()
  public content: string;
  

  constructor() { }

  ngOnInit() {
  }

  contentOnCreate(values: { [key: string]: any; }): void {
    this.title = values.title;
    this.subtitle = values.subtitle;
    this.content = values.content;
    const color: string = values.color ? `is-${values.color}` : '';
    this.cssClasses = [this.classes, color].join(' ');
  }

  contentEmbeddable(): ViewContainerRef {
    return this.embed;
  }
}
