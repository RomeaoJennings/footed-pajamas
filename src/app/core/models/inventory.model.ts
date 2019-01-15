
export class Inventory {
   size: string;
   code: string;
   quantity: number;

   constructor(code: string, size: string, qty: number) {
      this.size = size;
      this.code = code;
      this.quantity = qty;
   }
}
