import { Attribute, AttributeSet, Product } from "../../../types/Product";

export function getInitialAttributeIndex(
  attribute: Attribute,
  attributeSet: AttributeSet
) {
  const attributes = attributeSet.items;

  const index: number = attributes.findIndex((currentAttribute) => {
    if (JSON.stringify(currentAttribute) === JSON.stringify(attribute)) {
      return true;
    }
  });

  return index;
}

export function getInitialTextAttributes(product: Product): AttributeSet[] {
  return product.attributes.filter((attribute) => attribute.type === "text");
}
