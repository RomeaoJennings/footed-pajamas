import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-display/product-list/product-list.component';
import { ProductListRowComponent } from './product-display/product-list/product-list-row/product-list-row.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductListComponent,
    ProductListRowComponent,
    ProductDisplayComponent,
    CoreComponent
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [CoreComponent]
})
export class CoreModule {}
