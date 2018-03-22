import { Component, OnInit }	from '@angular/core';
import { SearchService }			from '../shared/services/search.service';
import { Subscription }				from 'rxjs/Subscription';
import { Observable }					from 'rxjs/Observable';


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  constructor(
  	public search			: SearchService
  	) { }

	  
  ngOnInit() {
  }


}
