import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Product } from '../shared/models/product.model';
import { AppState } from '../store/app.reducers';
import * as ProductSelectors from '../store/product/product.selectors';

@Component({
  selector: 'app-product-container',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
export class ProductsContainerComponent implements OnInit, OnDestroy {
  productSubscription: Subscription;
  products: Product[] = [];
  productRows: Product[][] = [];
  groupsOf = 3;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // FIXME: Move this to a guard.
    // TODO: Move categories into environment config.
    const validCategories = ['adult', 'kid', 'toddler', 'infant', 'pet'];
    if (
      validCategories.findIndex(
        // TODO: Use NGRX Store for category.
        val => val === this.activatedRoute.snapshot.params.category
      ) === -1
    ) {
      this.router.navigate(['/']);
    }

    this.productSubscription = this.store
      .select(ProductSelectors.selectProductsByCategory)
      .subscribe(products => {
        this.products = products;
        this.productRows = this.splitProducts();
      });
  }

  private splitProducts(): Array<Product[]> {
    const result: Array<Product[]> = [];
    const data = this.products.slice();
    while (data.length > 0) {
      result.push(data.splice(0, this.groupsOf));
    }
    return result;
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
