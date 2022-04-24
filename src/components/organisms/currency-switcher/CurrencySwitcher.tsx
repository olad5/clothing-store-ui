import { Component } from "react";
import "./CurrencySwitcher.scss";

export default class CurrencySwitcher extends Component {
  render() {
    let currencies = [
      {
        id: 0,
        symbol: "$",
        abbr: "USD",
      },
      {
        id: 1,
        symbol: "€",
        abbr: "EUR",
      },
      {
        id: 3,
        symbol: "$",
        abbr: "JPY",
      },
    ];

    return (
      <div id="currency-switcher">
        {currencies.map((currency) => (
          <div className="currency">
            <p>{currency.symbol}</p>
            <p>{currency.abbr}</p>
          </div>
        ))}
      </div>
    );
  }
}
