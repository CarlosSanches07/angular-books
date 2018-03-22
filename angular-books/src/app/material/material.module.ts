import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
  	MatIconModule,
  	MatInputModule,
  	MatCardModule,
  	MatDividerModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
