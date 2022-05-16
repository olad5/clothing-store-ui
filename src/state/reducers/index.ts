import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import currencyReducer from "./currencyReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  products: productsReducer,
  currencies: currencyReducer,
  cart: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
