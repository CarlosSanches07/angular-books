import { Injectable }   from '@angular/core';

@Injectable()
export class SearchService {

	list : any[];

  constructor(
  	) {
  		this.list = new Array<any>();
  	 }

  setList(newList : any[]) {
	 	this.list = newList;
  }

  getList() : any[] {
  	return this.list
  }
}
