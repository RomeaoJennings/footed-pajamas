import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CoreComponent
  ],
  imports: [CommonModule, FontAwesomeModule, CoreRoutingModule],
  exports: [CoreComponent]
})
export class CoreModule {}
