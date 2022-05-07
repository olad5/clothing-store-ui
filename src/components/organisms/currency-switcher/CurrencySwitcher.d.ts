import { Dispatch } from "redux";
import { CurrencyAction } from "../../../state/actions/currencies";
import { Currency } from "../../../types/Currency";

export type CurrencySwitcherProps = {
  currentCurrency: Currency;
  currencies: Currency[];
  changeCurrentCurrency: (
    currency
  ) => (dispatch: Dispatch<CurrencyAction>) => void;
};
