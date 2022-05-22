import { CartItemSchema } from "../../../types/CartItem";
import { Currency } from "../../../types/Currency";

export type CartTemplateProps = {
  cartTotalAmount: number;
  tax: number;
  cart: CartItemSchema[];
  currentCurrency: Currency;
};
