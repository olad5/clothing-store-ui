import { Currency } from "../../types/Currency";
import { CurrencyActionType } from "../action-types/index";

interface FetchCurrenciesAction {
  type: CurrencyActionType.FETCH_CURRENCIES;
  payload: Currency[];
}

interface FetchCurrentCurrencyAction {
  type: CurrencyActionType.CHANGE_CURRENT_CURRENCY;
  payload: Currency;
}

export type CurrencyAction = FetchCurrenciesAction | FetchCurrentCurrencyAction;
