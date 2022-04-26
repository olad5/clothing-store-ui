import React from "react";
import { PriceTagProps } from "./PriceTag.d";

// Styles
import "./PriceTag.scss";

export default class PriceTag extends React.Component<PriceTagProps> {
  render() {
    return (
      <div id="price-tag">
        <p
          className={`
            ${this.props.fontMedium ? "medium" : ""}
            ${this.props.fontBold ? "bold" : ""}
            `}
        >
          ${this.props.price.toFixed(2)}
        </p>
      </div>
    );
  }
}
