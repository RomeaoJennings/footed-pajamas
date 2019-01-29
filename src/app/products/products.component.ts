import { Component, Input } from '@angular/core';

import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() productRows: Product[][] = [];
  @Input() numberOfColumns = 3;
}
