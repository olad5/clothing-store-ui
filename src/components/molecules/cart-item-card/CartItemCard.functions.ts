import { Dispatch } from "redux";
import { CartActionType } from "../../../state/action-types";
import { CartAction } from "../../../state/actions/cart";
import { CartItemSchema } from "../../../types/CartItem";

export function updateCartQuantityCount(
  cartItem: CartItemSchema,
  action:
    | CartActionType.INCREMENT_CART_QUANTITY
    | CartActionType.DECREMENT_CART_QUANTITY,
  updateFn: (
    cartItem: CartItemSchema,
    action:
      | CartActionType.INCREMENT_CART_QUANTITY
      | CartActionType.DECREMENT_CART_QUANTITY
  ) => (dispatch: Dispatch<CartAction>) => void
): void {
  updateFn(cartItem, action);
}
export function deleteItemFromCart(
  cartItem: CartItemSchema,
  deleteFn: (
    cartItem: CartItemSchema
  ) => (dispatch: Dispatch<CartAction>) => void
) {
  deleteFn(cartItem);
}
