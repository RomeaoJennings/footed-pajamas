import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { FilterGroupComponent } from './filters/filter-group/filter-group.component';
import { FiltersContainerComponent } from './filters/filters.container';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductsRowComponent } from './products-row/products-row.component';
import { ProductsComponent } from './products.component';
import { ProductsContainerComponent } from './products.container';
import { ProductsRoutingModule } from './routing/products-routing.module';
import { WindowProvider } from './services/window-provider.service';
import { FilterEffects } from './store/filter/filter.effects';
import * as fromFilters from './store/filter/filter.reducers';
import { ProductEffects } from './store/product/product.effects';
import * as fromProducts from './store/product/product.reducers';
import { ProductDataResolver } from './store/product/products.dataResolver';

@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductsComponent,
    ProductsRowComponent,
    FiltersContainerComponent,
    ProductHeaderComponent,
    FilterGroupComponent
  ],
  providers: [ProductDataResolver, WindowProvider],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    StoreModule.forFeature('products', fromProducts.productReducer),
    StoreModule.forFeature('filters', fromFilters.filterReducer),
    EffectsModule.forFeature([ProductEffects, FilterEffects]),
    ProductsRoutingModule
  ]
})
export class ProductsModule {}
