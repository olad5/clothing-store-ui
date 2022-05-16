import { Reducer } from "redux";
import { CartItemSchema } from "../../types/CartItem";
import { CartActionType } from "../action-types";
import { CartAction } from "../actions/cart";

type initialStateType = {
  cart: CartItemSchema[];
};

const initialState: initialStateType = { cart: [] };

const cartReducer: Reducer<initialStateType, CartAction> = (
  state = initialState,
  action: CartAction
) => {
  switch (action.type) {
    case CartActionType.ADD_PRODUCT_TO_CART:
      if (
        state.cart.find(
          (currentItem) =>
            currentItem.name === action.payload.name &&
            JSON.stringify(
              currentItem.attributes.sort((a, b) => (a.name < b.name ? -1 : 1))
            ) ===
              JSON.stringify(
                action.payload.attributes.sort((a, b) =>
                  a.name < b.name ? -1 : 1
                )
              )
        )
      ) {
        return state;
      }

      return { ...state, cart: [...state.cart, action.payload] };

    default:
      return state;
  }
};

export default cartReducer;
