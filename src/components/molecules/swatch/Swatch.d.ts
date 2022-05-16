import { CartItemAttribute } from "../../../types/CartItem";
import { AttributeSet } from "../../../types/Product";

export type SwatchProps = {
  variant?: "cart-overlay-item" | "cart-item-card";
  swatchSet: AttributeSet;
  handleSwatchSelection: (
    e: React.MouseEvent<HTMLButtonElement>,
    attribute: CartItemAttribute
  ) => void;
};
