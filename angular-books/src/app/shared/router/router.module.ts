import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { SearchListComponent } from '../../search/search-list/search-list.component';


const routes = [
	{
		path : '',
		component : SearchListComponent
	}
];


@NgModule({
	imports : [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})

export class Router { };