import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchItemComponent } from './search-item/search-item.component';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollToModule }	from '@nicky-lenaers/ngx-scroll-to';

import { ControllerService } from '../shared/services/controller.service';
import { SearchService } from './shared/services/search.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ScrollToModule.forRoot()
  ],
  providers: [ControllerService, SearchService, ],
  declarations: [SearchHeaderComponent, SearchInputComponent, SearchListComponent, SearchItemComponent]
})
export class SearchModule { }
