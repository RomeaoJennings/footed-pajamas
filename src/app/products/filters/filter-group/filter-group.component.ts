import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSquare, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FilterGroup } from 'src/app/shared/models/filter-group.model';
import { Filter } from 'src/app/shared/models/filter.model';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss']
})
export class FilterGroupComponent implements OnInit {
  @Input() filterGroup: FilterGroup;
  @Output() addedFilters = new EventEmitter<Filter>();
  faSquare: IconDefinition = faSquare;

  constructor() {}

  ngOnInit() {
    console.log(this.filterGroup);
  }

  onFilterClicked(index: number) {
    console.log(index);
    this.addedFilters.next(this.filterGroup.filters[index]);
  }
}
