import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsContainerComponent } from './products.container';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListRowComponent } from './product-list/product-list-row/product-list-row.component';

@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductListComponent,
    ProductListRowComponent
  ],
  imports: [CommonModule]
})
export class ProductsModule {}
