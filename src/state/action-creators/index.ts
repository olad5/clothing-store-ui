import { Dispatch } from "redux";
import { CurrencyActionType, ProductActionType } from "../action-types";
import { categoryProductsQuery, currenciesQuery } from "../../services/queries";
import { requestData } from "../../services/requestData";
import { ProductAction } from "../actions/products";
import { CurrencyAction } from "../actions/currencies";
import { Currency } from "../../types/Currency";

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
