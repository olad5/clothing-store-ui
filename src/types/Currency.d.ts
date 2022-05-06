export type Currency = {
  label: string;
  symbol: string;
};

export type Price = {
  currency: Currency;
  amount: number;
};
