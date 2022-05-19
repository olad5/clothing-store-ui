import { Attribute, AttributeSet } from "../../../types/Product";

export function getInitialAttribute(
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
