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

    case CartActionType.INCREMENT_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.cartId === action.payload) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }

          return cartItem;
        }),
      };

    case CartActionType.DECREMENT_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.cartId === action.payload) {
            return {
              ...cartItem,
              quantity:
                cartItem.quantity !== 1
                  ? cartItem.quantity - 1
                  : cartItem.quantity,
            };
          }

          return cartItem;
        }),
      };

    case CartActionType.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.cartId !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
