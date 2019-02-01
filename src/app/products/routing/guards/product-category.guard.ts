import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { environment } from 'src/environments/environment';

@Injectable()
export class ProductCategoryGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      environment.validCategoryValues.findIndex(
        category => category === route.params.category
      ) !== -1
    ) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
