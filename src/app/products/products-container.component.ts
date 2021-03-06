import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../shared/models/product.model';
import { AppState } from '../store/app.reducers';
import { WindowProvider } from './services/window-provider.service';
import * as ProductFilterSelectors from './store/filters/selectors';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit, OnDestroy {
  productSubscription: Subscription;
  products: Product[] = [];
  productRows: Product[][] = [];
  groupsOf = 3;

  constructor(
    private store: Store<AppState>,
    private windowProvider: WindowProvider,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.onResize();
  }

  ngOnInit() {
    this.productSubscription = this.store
      .select(ProductFilterSelectors.selectFilteredProductsByCategory)
      .subscribe(products => {
        this.products = products;
        this.productRows = this.splitProducts();
      });
  }

  onProductClicked(product: Product) {
    this.router.navigate([product.id], { relativeTo: this.route });
  }

  @HostListener('window:resize')
  onResize() {
    const width = this.windowProvider.getWindow().innerWidth;
    const breakPoints = environment.screenBreakpoints.asArray;
    let itemsPerRow = 1;
    for (let i = 1; i < breakPoints.length; i++) {
      // skip over computer (i==3) because it doesn't change result
      // Phone = 1, Tablet Port = 2, Tablet Land = 3, Huge Computer = 4
      if (i === 3) {
        continue;
      }
      if (width >= breakPoints[i]) {
        itemsPerRow++;
      } else {
        if (itemsPerRow !== this.groupsOf) {
          this.groupsOf = itemsPerRow;
          this.productRows = this.splitProducts();
        }
        return;
      }
    }
  }

  private splitProducts(): Array<Product[]> {
    const result: Array<Product[]> = [];
    const data = this.products.slice();
    while (data.length > 0) {
      result.push(data.splice(0, this.groupsOf));
    }
    return result;
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
