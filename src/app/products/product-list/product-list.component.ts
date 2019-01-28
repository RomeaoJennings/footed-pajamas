import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import { Product } from 'src/app/shared/models/product.model';
import { selectProductsByCategory } from 'src/app/store/product/product.selectors';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() groupsOf = 2;
  productSubscription: Subscription;
  paramsSubscription: Subscription;
  products: Product[];
  rows: Product[][];
  loading: boolean;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.productSubscription = this.store
      .select(selectProductsByCategory)
      .subscribe(products => {
        this.products = products;
        this.rows = this.splitProducts();
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

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
  }
}
