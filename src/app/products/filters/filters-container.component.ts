import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faCheckSquare,
  faSquare,
  IconDefinition
} from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  selectActiveFilters,
  selectApplicableFilters
} from 'src/app/products/store/filter/filter.selectors';
import { FilterGroup } from 'src/app/shared/models/filter-group.model';
import { AppState } from '../../store/app.reducers';
import * as FilterActions from '../store/filter/filter.actions';
@Component({
  selector: 'app-filters-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.scss']
})
export class FiltersContainerComponent implements OnInit, OnDestroy {
  private filterValSubscription: Subscription;
  private activeFilterSubscription: Subscription;

  filterGroups: FilterGroup[];
  activeFilters: FilterGroup;

  checkIcon: IconDefinition = faCheckSquare;
  uncheckIcon: IconDefinition = faSquare;

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
      .subscribe(
        filters => (this.activeFilters = { name: 'Filtering By:', filters })
      );
  }

  ngOnDestroy(): void {
    this.filterValSubscription.unsubscribe();
    this.activeFilterSubscription.unsubscribe();
  }

  onFilterClicked(input: { groupIndex: number; filterIndex: number }) {
    if (input.groupIndex === -1) {
      this.onFilterRemoved(input.filterIndex);
    } else {
      this.onFilterAdded(input.groupIndex, input.filterIndex);
    }
  }

  private onFilterAdded(groupIndex: number, filterIndex: number) {
    this.store.dispatch(
      new FilterActions.AddActiveFilter({
        activeFilter: this.filterGroups[groupIndex].filters[filterIndex]
      })
    );
  }

  private onFilterRemoved(index: number) {
    this.store.dispatch(new FilterActions.RemoveActiveFilter({ index }));
  }
}
