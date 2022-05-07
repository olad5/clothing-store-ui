import { Dispatch } from "redux";
import { CurrencyAction } from "./state/actions/currencies";

export type AppProps = {
  getCurrencies: () => (dispatch: Dispatch<CurrencyAction>) => void;
};
