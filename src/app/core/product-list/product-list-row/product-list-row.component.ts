import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list-row',
  templateUrl: './product-list-row.component.html',
  styleUrls: ['./product-list-row.component.scss']
})
export class ProductListRowComponent implements OnInit {
  @Input() row: Product[];
  @Input() numberOfColumns: number;

  blankColumns;

  constructor() {}

  ngOnInit() {
    this.blankColumns = this.numberOfColumns - this.row.length;
  }
}
