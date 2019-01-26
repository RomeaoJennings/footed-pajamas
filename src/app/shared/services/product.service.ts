import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

import { Product } from '../../shared/models/product.model';

@Injectable()
export class ProductService {
  private productCollection: AngularFirestoreCollection<Product>;
  data: any;

  constructor(private db: AngularFirestore) {
    this.productCollection = db.collection<Product>('products');
  }

  addProduct(product: Product) {
    this.productCollection
      .doc(product.id)
      .set(product)
      .catch(err => console.log(err));
  }

  addProducts(products: Product[]) {
    products.forEach(product => this.addProduct(product));
  }

  deleteAllProducts() {
    const observable = this.productCollection.get();
    observable.subscribe(querySnap => {
      querySnap.forEach(docSnap => {
        docSnap.ref
          .delete()
          .then(val => console.log(val))
          .catch(err => console.log(err));
      });
    });
  }

  getProducts() {
    return this.productCollection.valueChanges();
  }

  // testProducts() {
  //   this.productCollection
  //     .snapshotChanges()
  //     .pipe(
  //       map(docChangeAction => {
  //         return docChangeAction.map(doc => {
  //           const document = doc.payload.doc;
  //           return { key: document.id, ...document.data() };
  //         });
  //       })
  //     )
  //     .subscribe(result => {
  //       this.data = result;
  //     });
  // }
}
