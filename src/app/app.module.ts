import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { CoreModule } from './core/core.module';
import { ProductService } from './shared/product.service';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './store/app.reducers';
import { ProductEffects } from './core/product-display/store/product.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    NavigationModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
