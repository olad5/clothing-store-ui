import { CartItemAttribute } from "../../../types/CartItem";
import { Product } from "../../../types/Product";
export type ProductDescriptionTemplateProps = {
  product: Product;

  addProductToCart: (
    product: Product,
    attributes: CartItemAttribute[]
  ) => (dispatch: Dispatch<CartAction>) => void;
};

export type StateProps = {
  currentDisplayImageIndex: number;
  attributes: CartItemAttribute[];
  swatchColor: null | string;
};
