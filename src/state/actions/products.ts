import { Product } from "../../types/Product";
import { ProductActionType } from "../action-types/index";

interface FetchProductAction {
  type: ProductActionType.FETCH_PRODUCT;
  payload: string;
}

interface FetchProductsByCategoryAction {
  type: ProductActionType.FETCH_PRODUCT_BY_CATEGORY;
  payload: Product[];
}

export type ProductAction = FetchProductAction | FetchProductsByCategoryAction;
