import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../core/core.module#CoreModule',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: '../products/products.module#ProductsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
