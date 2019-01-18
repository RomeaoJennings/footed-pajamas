export class Product {
  constructor(
    public name: string,
    public id: string,
    public material: string,
    public category: string,
    public features: string[],
    public listPrice: number,
    public salePrice: number,
    public imageUrls: string[],
    public colors: string[],
    public washInstructions: string,
    public notes: string[]
  ) {}
}
