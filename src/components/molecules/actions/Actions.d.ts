import { CartItemSchema } from "../../../types/CartItem";
import { Currency } from "../../../types/Currency";

export type ActionsProps = {
  currentCurrency: Currency;
  cart: CartItemSchema[];
};
