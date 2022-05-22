import { CartItemCardProps } from "../cart-item-card/CartItemCard.d";

export type CartOverlayItemCardProps = {} & Omit<
  CartItemCardProps,
  "removeProductFromCart"
>;
