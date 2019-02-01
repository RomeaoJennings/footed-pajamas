import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import { FilterGroupComponent } from './filters/filter-group/filter-group.component';
import { FiltersContainerComponent } from './filters/filters-container.component';
import { ProductDetailContainerComponent } from './product-detail/product-detail-container.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductsContainerComponent } from './products-container.component';
import { ProductsRowComponent } from './products/products-row/products-row.component';
import { ProductsComponent } from './products/products.component';
import { ProductsRoutingModule } from './routing/products-routing.module';
import { WindowProvider } from './services/window-provider.service';
import { ProductsStoreModule } from './store/products-store.module';
import { ProductDetailComponent } from './product-detail/product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductsComponent,
    ProductsRowComponent,
    FiltersContainerComponent,
    ProductHeaderComponent,
    FilterGroupComponent,
    ProductDetailContainerComponent,
    ProductDetailComponent
  ],
  providers: [WindowProvider],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ProductsRoutingModule,
    ProductsStoreModule
  ]
})
export class ProductsModule {}
