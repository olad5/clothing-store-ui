import { CartItemSchema } from "../../../types/CartItem";
import { AttributeSet } from "../../../types/Product";

export type CartItemCardProps = {
  cartItem: CartItemSchema;
  productAttributes: AttributeSet[];
};
