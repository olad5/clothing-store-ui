import { CartItemSchema } from "../../types/CartItem";
import { Currency } from "../../types/Currency";

export type CartPageProps = {
  cart: CartItemSchema[];
  currentCurrency: Currency;
};
