import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { CustomSerializer } from './router/route-serializer';

@NgModule({
  imports: [
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer })
  ]
})
export class AppStoreModule {}
