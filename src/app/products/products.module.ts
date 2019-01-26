import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { ProductsContainerComponent } from './products.container';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListRowComponent } from './product-list/product-list-row/product-list-row.component';

@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductListComponent,
    ProductListRowComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ]
})
export class ProductsModule {}
