import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { take } from 'rxjs/operators';
import { Store, MemoizedSelector, Action } from '@ngrx/store';

import { AppState } from '../store/app.reducers';
import * as ProductActions from '../store/product/product.actions';
import * as FilterActions from '../store/product-filter/product-filter.actions';
import { selectProductsAreLoadingOrLoaded } from '../store/product/product.selectors';
import { selectFiltersAreLoadingOrLoaded } from '../store/product-filter/product-filter.selectors';

@Injectable()
export class ProductDataResolver implements Resolve<void> {
  constructor(private store: Store<AppState>) {}
  resolve() {
    this.fetchData(
      selectProductsAreLoadingOrLoaded,
      new ProductActions.FetchProducts()
    );
    this.fetchData(
      selectFiltersAreLoadingOrLoaded,
      new FilterActions.FetchFilters()
    );
  }

  fetchData(
    selector: MemoizedSelector<AppState, boolean>,
    fetchAction: Action
  ) {
    this.store
      .select(selector)
      .pipe(take(1))
      .subscribe(dataLoaded => {
        if (!dataLoaded) {
          this.store.dispatch(fetchAction);
        }
      });
  }
}
