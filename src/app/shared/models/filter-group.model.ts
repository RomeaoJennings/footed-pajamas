import { Filter } from './filter.model';

export interface FilterGroup {
  name: string;
  filters: Filter[];
}
