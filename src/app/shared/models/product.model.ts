import { FirestoreProductDetail } from './firestore-product-detail.model';
import { FirestoreProduct } from './firestore-product.model';

export class Product {
  constructor(
    public name: string,
    public id: string,
    public productFamilyId: string,
    public material: string,
    public type: string,
    public category: string,
    public features: string[],
    public listPrice: number,
    public salePrice: number,
    public imageUrls: string[],
    public colors: string[],
    public washInstructions: string,
    public notes: string[]
  ) {}

  static fromFirestore(
    product: FirestoreProduct,
    detail: FirestoreProductDetail
  ): Product {
    return new Product(
      product.name.replace('{Category}', Product.capitalize(detail.category)),
      detail.id,
      product.id,
      product.material,
      product.type,
      detail.category,
      product.features,
      detail.listPrice,
      detail.salePrice,
      detail.imageUrls.map(
        // TODO: Move configuration into environments.ts
        url =>
          `https://firebasestorage.googleapis.com/v0/b/footed-pajamas.appspot.com/o/${url}?alt=media`
      ),
      product.colors,
      product.washInstructions,
      product.notes
    );
  }

  static capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}
