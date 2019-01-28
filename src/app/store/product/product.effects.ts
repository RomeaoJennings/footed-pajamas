import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { switchMap, map, delay } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { FirestoreProduct } from 'src/app/shared/models/firestore-product.model';
import { FirestoreProductDetail } from 'src/app/shared/models/firestore-product-detail.model';
import { Product } from 'src/app/shared/models/product.model';

@Injectable()
export class ProductEffects {
  fsProducts: AngularFirestoreCollection<FirestoreProduct>;
  fsProductDetails: AngularFirestoreCollection<FirestoreProductDetail>;
  detailCollection = 'ProductDetail';

  constructor(private $actions: Actions, private db: AngularFirestore) {
    this.fsProducts = db.collection('Products');
    this.fsProductDetails = db.collection('ProductDetail'); // TODO: MOVE THIS TO ENVIRONMENT OBJ
  }

  @Effect()
  fetchProducts = this.$actions.pipe(
    ofType<ProductActions.FetchProducts>(ProductActions.FETCH),
    map(action => action.payload.category),
    switchMap(category => {
      return combineLatest(
        this.fsProducts.valueChanges(),
        this.db
          .collection<FirestoreProductDetail>(this.detailCollection, ref =>
            ref.where('category', '==', category)
          )
          .valueChanges()
      ).pipe(
        map(data => {
          return new ProductActions.FetchProductsSuccess({
            products: this.buildProductsFromFirebaseData(...data),
            category
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
