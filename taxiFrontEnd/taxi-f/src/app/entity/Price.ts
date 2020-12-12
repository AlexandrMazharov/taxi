export class Price {
  price_id: number;
  price: number;
  title: string;


  constructor(price_id: number, price: number, price_title: string) {
    this.price_id = price_id;
    this.price = price;
    this.title = price_title;
  }
}
