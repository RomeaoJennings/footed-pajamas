import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from 'src/environments/environment';
import { FilterGroupComponent } from './filters/filter-group/filter-group.component';
import { FiltersContainerComponent } from './filters/filters.container';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductsRowComponent } from './products-row/products-row.component';
import { ProductsComponent } from './products.component';
import { ProductsContainerComponent } from './products.container';
import { ProductDataResolver } from './products.dataResolver';
import { WindowProvider } from './services/window-provider.service';
import { ActiveFiltersComponent } from './filters/active-filters/active-filters.component';

@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductsComponent,
    ProductsRowComponent,
    FiltersContainerComponent,
    ProductHeaderComponent,
    FilterGroupComponent,
    ActiveFiltersComponent
  ],
  providers: [ProductDataResolver, WindowProvider],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ]
})
export class ProductsModule {}
