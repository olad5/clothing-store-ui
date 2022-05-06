import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import productsReducer from "./productsReducer";

const reducers = combineReducers({
  category: categoryReducer,
  products: productsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
