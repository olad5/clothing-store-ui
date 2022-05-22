import { CartItemSchema } from "../../types/CartItem";
import { Currency } from "../../types/Currency";

export function getTotalAmount(
  cart: CartItemSchema[],
  currentCurrency: Currency
) {
  const total = cart
    .map((cartItem) => cartItem.prices)
    .map((cartItemPrices) =>
      cartItemPrices.filter(
        (price) => price.currency.symbol === currentCurrency.symbol
      )
    )
    .flat()
    .map((currency, index) => currency.amount * cart[index].quantity)
    .reduce((accmulator, currentValue) => {
      return accmulator + currentValue;
    }, 0);
  return total;
}
