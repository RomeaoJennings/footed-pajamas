import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppStoreModule } from 'src/app/store/app-store.module';
import { FilterEffects } from './filters/effects';
import * as fromFilters from './filters/reducers';
import { ProductDataResolver } from './products/dataResolver';
import { ProductEffects } from './products/effects';
import * as fromProducts from './products/reducers';

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
