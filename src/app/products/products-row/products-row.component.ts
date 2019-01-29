import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-products-row',
  templateUrl: './products-row.component.html',
  styleUrls: ['./products-row.component.scss']
})
export class ProductsRowComponent implements OnInit {
  @Input() row: Product[] = [];
  @Input() numberOfColumns = 0;

  blankColumns: number;

  constructor() {}

  ngOnInit() {
    this.blankColumns = this.numberOfColumns - this.row.length;
  }
}
