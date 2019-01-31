import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FilterGroup } from 'src/app/shared/models/filter-group.model';
import { Filter } from 'src/app/shared/models/filter.model';
import {
  selectActiveFilters,
  selectApplicableFilters
} from 'src/app/store/filter/filter.selectors';
import { AppState } from '../../store/app.reducers';
import * as FilterActions from '../../store/filter/filter.actions';
@Component({
  selector: 'app-filters-container',
  templateUrl: './filters.container.html',
  styleUrls: ['./filters.container.scss']
})
export class FiltersContainerComponent implements OnInit, OnDestroy {
  private filterValSubscription: Subscription;
  private activeFilterSubscription: Subscription;

  filterGroups: FilterGroup[];
  activeFilters: Filter[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.filterValSubscription = this.store
      .select(selectApplicableFilters)
      .subscribe(vals => {
        this.filterGroups = vals;
        console.log(JSON.stringify(this.filterGroups));
      });

    this.activeFilterSubscription = this.store
      .select(selectActiveFilters)
      .subscribe(filters => (this.activeFilters = filters));
  }

  ngOnDestroy(): void {
    this.filterValSubscription.unsubscribe();
    this.activeFilterSubscription.unsubscribe();
  }

  onAddedFilter(filter: Filter) {
    this.store.dispatch(
      new FilterActions.AddActiveFilter({ activeFilter: filter })
    );
  }

  onRemovedFilter(index: number) {
    this.store.dispatch(new FilterActions.RemoveActiveFilter({ index }));
  }
}
