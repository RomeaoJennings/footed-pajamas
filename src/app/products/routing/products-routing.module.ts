import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsContainerComponent } from '../products-container.component';
import { ProductDataResolver } from '../store/products/dataResolver';
import { ProductCategoryGuard } from './guards/product-category.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsContainerComponent,
    resolve: { loadData: ProductDataResolver },
    canActivate: [ProductCategoryGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [ProductCategoryGuard],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}