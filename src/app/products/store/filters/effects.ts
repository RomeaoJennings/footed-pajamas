import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FilterFactory } from 'src/app/shared/models/filter-factory.model';
import * as FilterActions from './actions';

@Injectable()
export class FilterEffects {
  constructor(private actions$: Actions, private db: AngularFirestore) {}

  @Effect()
  fetchFilters = this.actions$.pipe(
    ofType(FilterActions.FETCH_FACTORIES),
    switchMap(() =>
      this.db
        .collection<FilterFactory>('ProductFilters')
        .valueChanges()
        .pipe(
          map(data => {
            data = data.map(
              filter =>
                // Need to remap them to ensure that FilterFactory methods are available.
                new FilterFactory(
                  filter.filterType,
                  filter.target,
                  filter.displayName
                )
            );
            return new FilterActions.FetchFactoriesSuccess({ factories: data });
          }),
          catchError(error =>
            of(new FilterActions.FetchFactoriesError({ error }))
          )
        )
    )
  );

  @Effect() clearFiltersOnNavigation = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    switchMap(() => {
      return of(new FilterActions.ClearActiveFilters());
    })
  );
}
