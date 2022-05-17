import { Reducer } from "redux";
import { Product } from "../../types/Product";
import { ProductActionType } from "../action-types";
import { ProductAction } from "../actions/products";

type initialStateType = {
  products: Product[];
};

const initialState: initialStateType = { products: [] };

const productsReducer: Reducer<initialStateType, ProductAction> = (
  state = initialState,
  action: ProductAction
) => {
  switch (action.type) {
    case ProductActionType.FETCH_PRODUCT_BY_CATEGORY:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
