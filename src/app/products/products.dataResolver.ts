import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.reducers';
import * as ProductActions from '../store/product/product.actions';

@Injectable()
export class ProductDataResolver implements Resolve<void> {
  constructor(private store: Store<AppState>) {}
  resolve() {
    this.store
      .select('products')
      .pipe(take(1))
      .subscribe(productState => {
        if (!productState.isLoaded) {
          this.store.dispatch(new ProductActions.FetchProducts());
        }
      });
  }
}
