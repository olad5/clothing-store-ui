import { CartItemSchema } from "../../types/CartItem";
import { CartActionType } from "../action-types/index";

interface AddProductToCartAction {
  type: CartActionType.ADD_PRODUCT_TO_CART;
  payload: CartItemSchema;
}
interface FetchCartAction {
  type: CartActionType.FETCH_CART_ITEMS;
  payload: CartItemSchema[];
}

interface IncrementCartQuantityAction {
  type: CartActionType.INCREMENT_CART_QUANTITY;
  payload: number;
}

interface DecrementCartQuantityAction {
  type: CartActionType.DECREMENT_CART_QUANTITY;
  payload: number;
}

export type CartAction =
  | AddProductToCartAction
  | FetchCartAction
  | IncrementCartQuantityAction
  | DecrementCartQuantityAction;
