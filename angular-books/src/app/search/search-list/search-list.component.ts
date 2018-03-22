import { Component, OnInit, HostListener } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  isVisible : boolean;

  constructor(
  	private _scrollToService: ScrollToService
  	) { }

  ngOnInit() {
    this.isVisible = false;
  }

  scrollTo () {
  	const config : ScrollToConfigOptions = {
  		target : 'header',
  		duration: 700,
  		easing: 'easeOutCubic',
  		offset: 0
  	}
  	this._scrollToService.scrollTo(config);
  }

  @HostListener('window:scroll', ['$event'])
    scrolled(elem) {
      this.isVisible = (elem.currentTarget.scrollY > 301);
    }
}
