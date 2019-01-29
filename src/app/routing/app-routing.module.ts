import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsContainerComponent } from '../products/products.container';
import { HomeComponent } from '../core/home/home.component';
import { ProductDataResolver } from '../products/products.dataResolver';
import { ProductCategoryGuard } from './guards/product-category.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: ':category',
    component: ProductsContainerComponent,
    resolve: { loadData: ProductDataResolver },
    canActivate: [ProductCategoryGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ProductCategoryGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {}
