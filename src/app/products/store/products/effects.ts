import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FirestoreProductDetail } from 'src/app/shared/models/firestore-product-detail.model';
import { FirestoreProduct } from 'src/app/shared/models/firestore-product.model';
import { Product } from 'src/app/shared/models/product.model';
import * as ProductActions from './actions';

@Injectable()
export class ProductEffects {
  fsProducts: AngularFirestoreCollection<FirestoreProduct>;
  fsProductDetails: AngularFirestoreCollection<FirestoreProductDetail>;
  detailCollection = 'ProductDetail'; // FIXME:

  constructor(private actions$: Actions, private db: AngularFirestore) {
    this.fsProducts = db.collection('Products');
    this.fsProductDetails = db.collection('ProductDetail'); // TODO: MOVE THIS TO ENVIRONMENT OBJ
  }

  @Effect()
  fetchProducts = this.actions$.pipe(
    ofType<ProductActions.FetchProducts>(ProductActions.FETCH),
    switchMap(() => {
      return combineLatest(
        this.fsProducts.valueChanges(),
        this.fsProductDetails.valueChanges()
      ).pipe(
        map(data => {
          return new ProductActions.FetchProductsSuccess({
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
