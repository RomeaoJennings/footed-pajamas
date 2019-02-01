import { inject, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/routing/app-routing.module';
import { ProductCategoryGuard } from './product-category.guard';

describe('ProductCategoryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCategoryGuard],
      imports: [AppRoutingModule]
    });
  });

  it('should ...', inject(
    [ProductCategoryGuard],
    (guard: ProductCategoryGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
