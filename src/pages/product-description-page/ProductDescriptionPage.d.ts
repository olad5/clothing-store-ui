import { Product } from "../../types/Product";
import { WithRouterProps, Params } from "../../with-router/withRouter";

export type LinkStateProps = {
  product: Product;
};

export type ProductDescriptionPageProps = LinkStateProps &
  WithRouterProps<Params>;
