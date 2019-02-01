import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailContainerComponent } from '../product-detail/product-detail-container.component';
import { ProductsContainerComponent } from '../products-container.component';
import { ProductDataResolver } from '../store/products/dataResolver';
import { ProductCategoryGuard } from './guards/product-category.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsContainerComponent,
    resolve: { loadData: ProductDataResolver },
    canActivate: [ProductCategoryGuard]
  },
  {
    path: ':productId',
    component: ProductDetailContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [ProductCategoryGuard],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
