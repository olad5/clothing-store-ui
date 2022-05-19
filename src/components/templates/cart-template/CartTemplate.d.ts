import { CartItemSchema } from "../../../types/CartItem";

export type CartTemplateProps = {
  cartTotalAmount: number;
  tax: number;
  cart: CartItemSchema[];
};
