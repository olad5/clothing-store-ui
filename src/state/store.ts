import thunk from "redux-thunk";
import rootReducer, { RootState } from "./reducers";
import { createStore, applyMiddleware } from "redux";

function saveToLocalStorage(state: RootState) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (error) {
    console.warn(error);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (error) {
    console.warn(error);
    return undefined;
  }
}

export const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  applyMiddleware(thunk)
);

store.subscribe(() => saveToLocalStorage(store.getState()));
