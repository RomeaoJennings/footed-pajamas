import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { ProductsContainerComponent } from './products.container';
import { ProductsRowComponent } from './products-row/products-row.component';
import { ProductsComponent } from './products.component';
import { ProductDataResolver } from './products.dataResolver';
import { WindowProvider } from './services/window-provider.service';
import { FiltersContainerComponent } from './filters/filters.container.';
import { ProductHeaderComponent } from './product-header/product-header.component';

@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductsComponent,
    ProductsRowComponent,
    FiltersContainerComponent,
    ProductHeaderComponent
  ],
  providers: [ProductDataResolver, WindowProvider],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ]
})
export class ProductsModule {}
