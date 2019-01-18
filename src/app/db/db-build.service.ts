import { Injectable } from '@angular/core';

import { ProductService } from '../shared/product.service';
import { infantFleece } from './infantFleece.data';
import { infantChenille } from './infantChenille.data';

@Injectable()
export class DbBuildService {
  constructor(private productService: ProductService) {}

  buildProductsDb() {
    this.productService.addProducts(infantFleece);
    this.productService.addProducts(infantChenille);
  }
}
