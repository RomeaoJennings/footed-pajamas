import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import * as fromProducts from '../store/products/reducers';
import * as productSelectors from '../store/products/selectors';

@Component({
  selector: 'app-product-detail-container',
  template:
    '<app-product-detail [product]="product$ | async"></app-product-detail>',
  styleUrls: ['./product-detail-container.component.scss']
})
export class ProductDetailContainerComponent implements OnInit {
  product$: Observable<Product> = null;
  constructor(private store: Store<fromProducts.State>) {}

  ngOnInit() {
    this.product$ = this.store.select(productSelectors.selectCurrentProduct);
  }
}
