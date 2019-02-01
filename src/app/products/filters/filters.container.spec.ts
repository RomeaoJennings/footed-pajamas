import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/routing/app-routing.module';
import { AppStoreModule } from 'src/app/store/app-store.module';
import { filterReducer } from '../store/filter/filter.reducers';
import { FilterGroupComponent } from './filter-group/filter-group.component';
import { FiltersContainerComponent } from './filters.container';

describe('FiltersContainerComponent', () => {
  let component: FiltersContainerComponent;
  let fixture: ComponentFixture<FiltersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersContainerComponent, FilterGroupComponent],
      imports: [
        FontAwesomeModule,
        AppStoreModule,
        AppRoutingModule,
        StoreModule.forFeature('filters', filterReducer)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
