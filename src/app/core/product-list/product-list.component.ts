import { Component, OnInit, Input } from '@angular/core';

import { ProductData } from '../../models/products.data';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() groupsOf = 5;
  products: Product[] = ProductData;
  rows: Array<Product[]>;

  constructor() {}

  ngOnInit() {
    this.rows = this.splitProducts();
  }

  private splitProducts(): Array<Product[]> {
    const result: Array<Product[]> = [];
    const data = this.products.slice();
    while (data.length > 0) {
      result.push(data.splice(0, this.groupsOf));
    }
    return result;
  }
}
