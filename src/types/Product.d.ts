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
  displayValue: String;
  value: String;
  id: String;
};

type AttributeSet = {
  id: String;
  name: String;
  type: String;
  items: Attribute[];
};
