import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { ControllerService }                                  from '../../shared/services/controller.service';
import { SearchService }                                      from '../shared/services/search.service';
import { Subscription }                                       from 'rxjs/Subscription';  
import { DomSanitizer }                                       from '@angular/platform-browser';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  subscriber     : Subscription;
  
  constructor(
    private controller : ControllerService,
    private search     : SearchService,
    private sanitizer  : DomSanitizer
    ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.subscriber)
      this.subscriber.unsubscribe();
  }

  do(name : String) {
    if ( !name ) {
      return
    }
  	this.subscriber = this.controller.list(name)
      .subscribe( ( data ) => {
        let list = new Array<{}>();
        data.items.forEach( ( item ) => {
          list.push({
            title : item.volumeInfo.title,
            authors : item.volumeInfo.authors,
            description : item.volumeInfo.description,
            img : this.sanitizer.bypassSecurityTrustResourceUrl(item.volumeInfo.imageLinks.smallThumbnail),
            prev : this.sanitizer.bypassSecurityTrustUrl(item.volumeInfo.previewLink)
          })
        })
        this.search.setList(list);
      });
  }
}
