import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppStoreModule } from 'src/app/store/app-store.module';
import { FilterEffects } from './filter/filter.effects';
import * as fromFilters from './filter/filter.reducers';
import { ProductEffects } from './product/product.effects';
import * as fromProducts from './product/product.reducers';
import { ProductDataResolver } from './product/products.dataResolver';

@NgModule({
  providers: [ProductDataResolver],
  imports: [
    AppStoreModule,
    StoreModule.forFeature('products', fromProducts.productReducer),
    StoreModule.forFeature('filters', fromFilters.filterReducer),
    EffectsModule.forFeature([ProductEffects, FilterEffects])
  ]
})
export class ProductsStoreModule {}
