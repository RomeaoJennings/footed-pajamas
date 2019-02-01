import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../routing/app-routing.module';
import { ProductsContainerComponent } from './products-container.component';
import { ProductsModule } from './products.module';

describe('ProductsContainerComponent', () => {
  let component: ProductsContainerComponent;
  let fixture: ComponentFixture<ProductsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProductsModule, AppRoutingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
