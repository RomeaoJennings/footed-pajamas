import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Product } from '../../../shared/product.model';
import { ProductService } from '../../../shared/product.service';
import * as fromApp from '../../../store/app.reducers';
import * as ProductActions from '../store/product.actions';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() groupsOf = 5;
  productSubscription: Subscription;
  products: Product[];
  rows: Product[][];
  loading: boolean;

  constructor(
    private productService: ProductService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new ProductActions.Fetch());
    this.productSubscription = this.store
      .select('products')
      .subscribe(productState => {
        this.loading = productState.loading;
        if (!productState.error) {
          this.products = productState.products;
          this.rows = this.splitProducts();
        } else {
          console.log(productState.error);
        }
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
  }
}
