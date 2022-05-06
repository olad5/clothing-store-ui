import { Dispatch } from "redux";
import { ProductAction } from "../../../state/actions/products";
export type CategoryBoxProps = {
  getCategoryProducts: (
    category: string
  ) => (dispatch: Dispatch<ProductAction>) => void;
};
