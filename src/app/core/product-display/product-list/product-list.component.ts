import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from '../../../shared/product.model';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() groupsOf = 5;
  productSubscription: Subscription;
  products: Product[];
  rows: Array<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productSubscription = this.productService
      .getProducts()
      .subscribe(products => {
        this.products = <Product[]>products;
        this.rows = this.splitProducts();
      });
  }

  private splitProducts(): Array<Product[]> {
    const result: Array<Product[]> = [];
    const data = this.products.slice();
    while (data.length > 0) {
      result.push(data.splice(0, this.groupsOf));
    }
    return result;
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
