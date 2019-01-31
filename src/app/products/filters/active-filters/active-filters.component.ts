import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { Filter } from 'src/app/shared/models/filter.model';

@Component({
  selector: 'app-active-filters',
  templateUrl: './active-filters.component.html',
  styleUrls: ['./active-filters.component.scss']
})
export class ActiveFiltersComponent implements OnInit {
  @Input() filters: Filter[] = [];
  @Output() filterClicked = new EventEmitter<number>();
  faCheckSquare = faCheckSquare;

  constructor() {}

  ngOnInit() {}

  onFilterClicked(index: number) {
    this.filterClicked.next(index);
  }
}
