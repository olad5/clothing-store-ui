import { Dispatch } from "redux";
import { ProductAction } from "../../../state/actions/products";
import { WithRouterProps } from "../../../with-router/withRouter";

export type CategoryBoxProps = WithRouterProps & {
  getCategoryProducts: (
    category: string
  ) => (dispatch: Dispatch<ProductAction>) => void;
};
