import { CartItemSchema } from "../../../types/CartItem";
import { Currency } from "../../../types/Currency";
import { WithRouterProps } from "../../../with-router/withRouter";

export type ActionsProps = WithRouterProps & {
  currentCurrency: Currency;
  cart: CartItemSchema[];
};
