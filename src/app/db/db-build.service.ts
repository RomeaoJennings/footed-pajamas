import { Injectable } from '@angular/core';

import { infantFleece } from './infantFleece.data';
import { ProductService } from '../shared/product.service';

@Injectable()
export class DbBuildService {
  constructor(private productService: ProductService) {}

  buildProductsDb() {
    this.productService.addProducts(infantFleece);
  }
}
