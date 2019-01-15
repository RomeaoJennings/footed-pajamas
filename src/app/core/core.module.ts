import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';

@NgModule({
  declarations: [HomeComponent, ProductListComponent, ProductComponent],
  imports: [CommonModule]
})
export class CoreModule {}
