import { Component, OnInit, OnDestroy } from '@angular/core';
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

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
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
