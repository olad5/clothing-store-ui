import { Dispatch } from "redux";
import { CurrencyAction } from "./state/actions/currencies";
import { ProductAction } from "./state/actions/products";

export type AppProps = {
  getCurrencies: () => (dispatch: Dispatch<CurrencyAction>) => void;
  getCategoryProducts: (
    category: string
  ) => (dispatch: Dispatch<ProductAction>) => void;
};
