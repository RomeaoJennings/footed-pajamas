import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { ProductsContainerComponent } from './products.container';
import { ProductsRowComponent } from './products-row/products-row.component';
import { ProductsComponent } from './products.component';
import { ProductDataResolver } from './products.dataResolver';

@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductsComponent,
    ProductsRowComponent
  ],
  providers: [ProductDataResolver],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ]
})
export class ProductsModule {}
