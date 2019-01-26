import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faShoppingBag,
  faSearch,
  faBars,
  faWindowClose
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Font Awesome Icons
  myAccountIcon = faUserCircle;
  myBagIcon = faShoppingBag;
  searchIcon = faSearch;
  hamburgerIcon = faBars;

  navBarCollapsed = true;

  constructor() {}

  ngOnInit() {}

  onToggleHamburger() {
    this.navBarCollapsed = !this.navBarCollapsed;
    this.hamburgerIcon = this.hamburgerIcon === faBars ? faWindowClose : faBars;
  }
}
