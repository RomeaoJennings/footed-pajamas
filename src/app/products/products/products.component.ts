import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() productRows: Product[][] = [];
  @Input() numberOfColumns = 3;
  @Output() productClicked = new EventEmitter<Product>();

  onProductClicked(product: Product) {
    this.productClicked.emit(product);
  }
}
