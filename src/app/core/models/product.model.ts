import { Inventory } from './inventory.model';

export class Product {

   constructor(
      public name: string,
      public code: string,
      public productCode: string,
      public sizeCode: string,
      public listPrice: number,
      public salePrice: number,
      public imagePaths: Array<string>,
      public washingInstructions: string,
      public description: Array<string>,
      public inventory?: Array<Inventory>,
   ) {}

   listPriceStr(): string {
    return this.toCurrencyString(this.listPrice);
   }

   salePriceStr(): string {
    return this.toCurrencyString(this.salePrice);
   }

   private toCurrencyString(num: number): string {
    return `$${num.toFixed(2)}`;
   }
}
