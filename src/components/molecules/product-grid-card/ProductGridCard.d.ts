import { Dispatch } from "redux";
import { CartAction } from "../../../state/actions/cart";
import { CartItemAttribute } from "../../../types/CartItem";
import { Product } from "../../../types/Product";

export type ProductGridCardProps = {
  outOfStock?: boolean;
  product: Product;
  addProductToCart: (
    product: Product,
    attributes: CartItemAttribute[]
  ) => (dispatch: Dispatch<CartAction>) => void;
};
