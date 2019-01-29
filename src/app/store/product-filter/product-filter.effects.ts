import { Injectable } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AngularFirestore } from '@angular/fire/firestore';

import * as FilterActions from './product-filter.actions';
import { ProductFilter } from 'src/app/shared/models/product-filter.model';
import { of } from 'rxjs';

@Injectable()
export class FilterEffects {
  constructor(private actions$: Actions, private db: AngularFirestore) {}

  @Effect()
  fetchFilters = this.actions$.pipe(
    ofType<FilterActions.FetchFilters>(FilterActions.FETCH),
    switchMap(() =>
      this.db
        .collection<ProductFilter>('ProductFilters')
        .valueChanges()
        .pipe(
          map(data => {
            return new FilterActions.FetchFiltersSuccess({ filters: data });
          }),
          catchError(error =>
            of(new FilterActions.FetchFiltersError({ error }))
          )
        )
    )
  );
}
