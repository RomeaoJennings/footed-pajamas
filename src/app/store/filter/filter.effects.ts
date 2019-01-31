import { Injectable } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AngularFirestore } from '@angular/fire/firestore';

import * as FilterActions from './filter.actions';
import { FilterFactory } from 'src/app/shared/models/filter-factory.model';
import { of } from 'rxjs';
import { Filter } from 'src/app/shared/models/filter.model';

@Injectable()
export class FilterEffects {
  constructor(private actions$: Actions, private db: AngularFirestore) {}

  @Effect()
  fetchFilters = this.actions$.pipe(
    ofType<FilterActions.FetchFilters>(FilterActions.FETCH),
    switchMap(() =>
      this.db
        .collection<FilterFactory>('ProductFilters')
        .valueChanges()
        .pipe(
          map(data => {
            data = data.map(
              filter =>
                new FilterFactory(
                  filter.filterType,
                  filter.target,
                  filter.displayString
                )
            );
            return new FilterActions.FetchFiltersSuccess({ filters: data });
          }),
          catchError(error =>
            of(new FilterActions.FetchFiltersError({ error }))
          )
        )
    )
  );
}
