import { Component, EventEmitter, OnChanges, OnInit, Input, Output, SimpleChange } from '@angular/core';
import { ContentDocument } from '../content.interfaces';

export interface LinkWithRel {
  rel: string;
  href: string;
}

@Component({
  selector: 'rc-content-links',
  templateUrl: './content-links.component.html'
})
export class ContentLinksComponent implements OnChanges, OnInit {

  public links: LinkWithRel[] = [];

  @Input()
  public document: ContentDocument;

  @Output()
  public selected: EventEmitter<LinkWithRel> = new EventEmitter<LinkWithRel>();

  constructor() {
    document.addEventListener('DOMContentLoaded', function () {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

          // Add a click event on each of them
          $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

              // Get the target from the "data-target" attribute
              const target = $el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the class on both the "navbar-burger" and the "navbar-menu"
              $el.classList.toggle('is-active');
              $target.classList.toggle('is-active');

            });
          });
        }

      });
   }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

    if (changes && changes.document && changes.document.currentValue) {
      this.prepareLinks(changes.document.currentValue);
    }

  }

  private prepareLinks(document: ContentDocument) {

    this.links = Object.keys(document._links)
      .map((rel: string) => {
        const href = document._links[rel].href;

        return { rel, href };
      });

  }

}
