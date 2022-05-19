import { Dispatch } from "redux";
import {
  CartActionType,
  CurrencyActionType,
  ProductActionType,
} from "../action-types";
import { categoryProductsQuery, currenciesQuery } from "../../services/queries";
import { requestData } from "../../services/requestData";
import { ProductAction } from "../actions/products";
import { CurrencyAction } from "../actions/currencies";
import { Currency } from "../../types/Currency";
import { CartItemSchema } from "../../types/CartItem";
import { CartAction } from "../actions/cart";

export const getCategoryProducts = (category: string) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    let variables = {
      title: category,
    };

    const { data } = await requestData(categoryProductsQuery(variables));

    const payload = data.category.products;
    dispatch({
      type: ProductActionType.FETCH_PRODUCT_BY_CATEGORY,
      payload: payload,
    });
  };
};

export const getCurrencies = () => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    const { data } = await requestData(currenciesQuery());
    const payload = data.currencies;
    dispatch({
      type: CurrencyActionType.FETCH_CURRENCIES,
      payload: payload,
    });
  };
};

export const changeCurrentCurrency = (currency: Currency) => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    const payload = currency;
    dispatch({
      type: CurrencyActionType.CHANGE_CURRENT_CURRENCY,
      payload: payload,
    });
  };
};

export const addProductToCart = (cartItem: CartItemSchema) => {
  return async (dispatch: Dispatch<CartAction>) => {
    const payload = cartItem;

    dispatch({
      type: CartActionType.ADD_PRODUCT_TO_CART,
      payload,
    });
  };
};

export const incrementCart = (cartItem: CartItemSchema) => {
  return async (dispatch: Dispatch<CartAction>) => {
    const payload = cartItem.cartId;

    dispatch({
      type: CartActionType.INCREMENT_CART_QUANTITY,
      payload,
    });
  };
};

export const decrementCart = (cartItem: CartItemSchema) => {
  return async (dispatch: Dispatch<CartAction>) => {
    const payload = cartItem.cartId;

    dispatch({
      type: CartActionType.DECREMENT_CART_QUANTITY,
      payload,
    });
  };
};

export const removeProductFromCart = (cartItem: CartItemSchema) => {
  return async (dispatch: Dispatch<CartAction>) => {
    const payload = cartItem.cartId;

    dispatch({
      type: CartActionType.REMOVE_PRODUCT_FROM_CART,
      payload,
    });
  };
};
