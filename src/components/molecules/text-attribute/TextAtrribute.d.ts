import { CartItemAttribute } from "../../../types/CartItem";
import { AttributeSet } from "../../../types/Product";

export type TextAttributeProps = {
  variant: "cart-overlay-item" | "cart-item-card";
  attributeSet: AttributeSet;
  initialAtrributeIndex: number;
  handleTextAttributeSelection?: (
    e: React.MouseEvent<HTMLButtonElement>,
    attribute: CartItemAttribute
  ) => void;
};
