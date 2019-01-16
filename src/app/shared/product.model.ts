export class Product {
  constructor(
    public name: string,
    public productCode: string,
    public style: string,
    public category: string,
    public listPrice: number,
    public salePrice: number,
    public imageUrls: Array<string>,
    public washInstructions: string,
    public notes: Array<string>
  ) {}
}
