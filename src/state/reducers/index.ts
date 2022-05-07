import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import currencyReducer from "./currencyReducer";

const reducers = combineReducers({
  products: productsReducer,
  currencies: currencyReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
