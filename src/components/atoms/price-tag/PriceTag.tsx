import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../state/reducers";
import { PriceTagProps } from "./PriceTag.d";

// Styles
import "./PriceTag.scss";

class PriceTag extends React.Component<PriceTagProps> {
  render() {
    let price = this.props.prices.filter(
      (price) => price.currency.symbol === this.props.currentCurrency.symbol
    )[0];

    return (
      <div id="price-tag">
        <p
          className={`
            ${this.props.fontMedium ? "medium" : ""}
            ${this.props.fontBold ? "bold" : ""}
            `}
        >
          {price.currency.symbol}
          {price.amount}
        </p>
        <p></p>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    currentCurrency: state.currencies.currentCurrency,
  };
}

export default connect(mapStateToProps)(PriceTag);
