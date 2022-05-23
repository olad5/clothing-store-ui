import { AttributeSet } from "../../../types/Product";

export function getInitialAttributes(
  swatchAttributes: AttributeSet[],
  textAttributes: AttributeSet[]
) {
  const initialAttributes = textAttributes
    .map((attribute) => {
      return {
        name: attribute.name,
        attribute: attribute.items[0],
      };
    })
    .concat(
      swatchAttributes.map((attribute) => {
        return {
          name: attribute.name,
          attribute: attribute.items[0],
        };
      })
    );
  return initialAttributes;
}
