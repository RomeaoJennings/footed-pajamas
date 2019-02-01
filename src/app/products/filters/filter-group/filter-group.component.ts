import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FilterGroup } from 'src/app/shared/models/filter-group.model';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss']
})
export class FilterGroupComponent implements OnInit, OnChanges {
  @Input() filterGroup: FilterGroup = { name: '', filters: [] };
  @Input() groupIndex = -1;
  @Input() icon: IconDefinition = null;
  @Input() showCounts = false;

  countsText: string[] = [];

  @Output() filterClicked = new EventEmitter<{
    groupIndex: number;
    filterIndex: number;
  }>();

  constructor() {}

  ngOnInit() {
    this.updateCountText();
  }

  ngOnChanges() {
    this.updateCountText();
  }

  private updateCountText() {
    for (const filter of this.filterGroup.filters) {
      let countStr = '';
      if (this.showCounts) {
        countStr = `(${filter.count})`;
      }
      this.countsText.push(countStr);
    }
  }

  onFilterClicked(index: number) {
    this.filterClicked.next({
      groupIndex: this.groupIndex,
      filterIndex: index
    });
  }
}
