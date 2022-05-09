import { Price, Currency } from "../../../types/Currency";

export type PriceTagProps = {
  fontBold?: boolean;
  fontMedium?: boolean;
  prices: Price[];
  currentCurrency: Currency;
};
