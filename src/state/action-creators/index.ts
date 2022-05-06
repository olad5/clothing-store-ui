import { Dispatch } from "redux";
import { ProductActionType } from "../action-types";

import { categoryProductsQuery } from "../../services/queries";

import { requestData } from "../../services/requestData";
import { ProductAction } from "../actions/products";

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
