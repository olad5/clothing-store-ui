import { Reducer } from "redux";
import { Currency } from "../../types/Currency";
import { CurrencyActionType } from "../action-types";
import { CurrencyAction } from "../actions/currencies";

type initialStateType = {
  currencies: Currency[];
  currentCurrency: Currency;
};

const initialState: initialStateType = {
  currencies: [],
  currentCurrency: { label: "USD", symbol: "$" },
};

const currencyReducer: Reducer<initialStateType, CurrencyAction> = (
  state = initialState,
  action: CurrencyAction
) => {
  switch (action.type) {
    case CurrencyActionType.FETCH_CURRENCIES:
      return { ...state, currencies: action.payload };

    case CurrencyActionType.CHANGE_CURRENT_CURRENCY:
      return { ...state, currentCurrency: action.payload };

    default:
      return state;
  }
};

export default currencyReducer;
