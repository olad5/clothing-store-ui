import { Product } from "../../../types/Product";
export type ProductsGridProps = {
  products: Product[];
  getCategoryProducts: (
    category: string
  ) => (dispatch: Dispatch<ProductAction>) => void;
};
