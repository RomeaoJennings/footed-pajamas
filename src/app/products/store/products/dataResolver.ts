import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Action, MemoizedSelector, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AppState } from '../../../store/app.reducers';
import * as FilterActions from '../filters/actions';
import { selectFiltersAreLoadingOrLoaded } from '../filters/selectors';
import * as ProductActions from './actions';
import { selectProductsAreLoadingOrLoaded } from './selectors';

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
      new FilterActions.FetchFactories()
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
