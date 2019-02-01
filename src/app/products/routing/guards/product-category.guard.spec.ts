import { TestBed, async, inject } from '@angular/core/testing';

import { ProductCategoryGuard } from './product-category.guard';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from 'src/app/core/home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { ProductsModule } from 'src/app/products/products.module';

describe('ProductCategoryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCategoryGuard, HomeComponent],
      imports: [AppRoutingModule, CoreModule, ProductsModule]
    });
  });

  it('should ...', inject(
    [ProductCategoryGuard],
    (guard: ProductCategoryGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
