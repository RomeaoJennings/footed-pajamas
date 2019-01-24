import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { switchMap, map, delay } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { FirestoreProduct } from 'src/app/shared/firestore-product.model';
import { FirestoreProductDetail } from 'src/app/shared/firestore-product-detail.model';
import { Product } from 'src/app/shared/product.model';

@Injectable()
export class ProductEffects {
  fsProducts: AngularFirestoreCollection<FirestoreProduct>;
  fsProductDetails: AngularFirestoreCollection<FirestoreProductDetail>;

  constructor(private $actions: Actions, db: AngularFirestore) {
    this.fsProducts = db.collection('Products');
    this.fsProductDetails = db.collection('ProductCategory');
  }

  @Effect()
  fetchProducts = this.$actions.pipe(
    ofType(ProductActions.FETCH_PRODUCTS),
    switchMap(() => {
      return combineLatest(
        this.fsProducts.valueChanges(),
        this.fsProductDetails.valueChanges()
      ).pipe(
        map(data => {
          return new ProductActions.FetchSuccess({
            products: this.buildProductsFromFirebaseData(...data)
          });
        })
      );
    })
  );

  private buildProductsFromFirebaseData(
    products: FirestoreProduct[],
    details: FirestoreProductDetail[]
  ): Product[] {
    const result: Product[] = [];
    for (const detail of details) {
      const product = products.find(prod => detail.productId === prod.id);
      if (!product) {
        throw new Error(
          `Corrupt database schema.  No product for corresponding ProductDetail object: ${
            detail.productId
          }`
        );
      }
      result.push(Product.fromFirestore(product, detail));
    }
    return result;
  }
}
