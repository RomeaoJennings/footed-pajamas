import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { ProductListComponent } from './product-display/product-list/product-list.component';
import { ProductListRowComponent } from './product-display/product-list/product-list-row/product-list-row.component';
import { ProductDisplayComponent } from './product-display/product-display.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductListRowComponent,
    ProductDisplayComponent
  ],
  imports: [CommonModule]
})
export class CoreModule {}
