import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import * as infantFleece from '../shared/data.json';

@Injectable()
export class ProductService {
  private productCollection: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.productCollection = db.collection('products');
  }

  private resetProducts() {
    this.deleteAllProducts();
    this.addProductsFromJson();
  }

  private addProductsFromJson() {
    infantFleece.forEach(product => {
      this.productCollection.add(product);
    });
  }

  private deleteAllProducts() {
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
}
