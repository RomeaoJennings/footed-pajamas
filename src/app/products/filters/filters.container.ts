import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FilterGroup } from 'src/app/shared/models/filter-group.model';
import { selectApplicableFilters } from 'src/app/store/filter/filter.selectors';
import { AppState } from '../../store/app.reducers';
@Component({
  selector: 'app-filters-container',
  templateUrl: './filters.container.html',
  styleUrls: ['./filters.container.scss']
})
export class FiltersContainerComponent implements OnInit, OnDestroy {
  private filterValSubscription: Subscription;
  private vals: FilterGroup[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.filterValSubscription = this.store
      .select(selectApplicableFilters)
      .subscribe(vals => {
        this.vals = vals;
        console.log(JSON.stringify(this.vals));
      });
  }

  ngOnDestroy(): void {
    this.filterValSubscription.unsubscribe();
  }
}
