import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDisplayComponent } from './core/product-display/product-display.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: ':category',
    component: ProductDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
