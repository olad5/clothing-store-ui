import { Price } from "./Currency";
import { Product, AttributeSet, Attribute } from "./Product";

export type CartItemSchema = Pick<Product, "name" | "gallery" | "prices"> & {
  id: string;
  attributes: CartItemAttribute[];
  cartId: number;
  quantity: number;
};

export type CartItemAttribute = {
  name: string;
  attribute: Attribute;
};

export class CartItem {
  constructor(
    public product: Product,
    public quantity: number,
    public attributes: CartItemAttribute[]
  ) {}

  create() {
    return {
      id: this.product.id,
      cartId: Number((Math.random() * 1000).toFixed(0)),
      gallery: this.product.gallery,
      quantity: this.quantity,
      name: this.product.name,
      prices: this.product.prices,
      attributes: this.attributes,
    };
  }
}
