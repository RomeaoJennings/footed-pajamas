import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-products-row',
  templateUrl: './products-row.component.html',
  styleUrls: ['./products-row.component.scss']
})
export class ProductsRowComponent implements OnInit {
  @Input() row: Product[] = [];
  @Input() numberOfColumns = 0;
  @Output() productClicked = new EventEmitter<Product>();

  blankColumns: number;

  constructor() {}

  onProductClicked(index: number) {
    this.productClicked.emit(this.row[index]);
  }

  ngOnInit() {
    this.blankColumns = this.numberOfColumns - this.row.length;
  }
}
