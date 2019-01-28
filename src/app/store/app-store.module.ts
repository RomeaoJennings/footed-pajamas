import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { ProductEffects } from './product/product.effects';
import { reducers } from './app.reducers';
import { CustomSerializer } from './router/route-serializer';

@NgModule({
  imports: [
    EffectsModule.forRoot([ProductEffects]),
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer })
  ]
})
export class AppStoreModule {}
