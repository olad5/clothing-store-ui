import { Price } from "./Currency.d";

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  brand: string;
  gallery: string[];
  inStock: boolean;
  attributes: AttributeSet[];
  prices: Price[];
};

type Attribute = {
  displayValue: string;
  value: string;
  id: string;
};

type AttributeSet = {
  id: string;
  name: string;
  type: string;
  items: Attribute[];
};
