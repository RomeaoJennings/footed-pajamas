import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListRowComponent } from './product-list/product-list-row/product-list-row.component';

@NgModule({
  declarations: [HomeComponent, ProductListComponent, ProductListRowComponent],
  imports: [CommonModule]
})
export class CoreModule {}
