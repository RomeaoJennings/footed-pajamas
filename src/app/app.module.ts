import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { AppComponent } from './app.component';
import { ProductService } from './shared/product.service';

import { reducers } from './store/app.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProductsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
