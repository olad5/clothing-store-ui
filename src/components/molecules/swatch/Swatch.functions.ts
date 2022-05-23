import { AttributeSet, Product } from "../../../types/Product";

export function getInitialSwatchAttributes(product: Product): AttributeSet[] {
  return product.attributes.filter((attribute) => attribute.type === "swatch");
}
