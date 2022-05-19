import { Dispatch } from "redux";
import { CartActionType } from "../../../state/action-types";
import { CartAction } from "../../../state/actions/cart";
import { CartItemSchema } from "../../../types/CartItem";
import { AttributeSet } from "../../../types/Product";

export type CartItemCardProps = {
  cartItem: CartItemSchema;
  productAttributes: AttributeSet[];
  updateCartQuantity: (
    cartItem: CartItemSchema,
    action:
      | CartActionType.INCREMENT_CART_QUANTITY
      | CartActionType.DECREMENT_CART_QUANTITY
  ) => (dispatch: Dispatch<CartAction>) => void;
};
