import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Product } from '../../../shared/product.model';
import * as fromApp from '../../../store/app.reducers';
import * as ProductActions from '../store/product.actions';
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

  constructor(
    private store: Store<fromApp.AppState>,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      const category = params['category'];

      console.log(`Category: ${category}`);
      this.store.dispatch(
        new ProductActions.GetProducts({ category: category })
      );
      if (this.productSubscription) {
        this.productSubscription.unsubscribe();
      }
      this.productSubscription = this.store
        .select('products')
        .subscribe(productState => {
          this.loading = productState[category].loading;
          if (!productState[category].error) {
            this.products = productState[category].products;
            this.rows = this.splitProducts();
          } else {
            console.log(productState[category].error);
          }
        });
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
