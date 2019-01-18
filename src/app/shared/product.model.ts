export class Product {
  constructor(
    public name: string,
    public productCode: string,
    public material: string,
    public category: string,
    public features: string[],
    public listPrice: number,
    public salePrice: number,
    public imageUrls: string[],
    public washInstructions: string,
    public notes: string[]
  ) {}
}
