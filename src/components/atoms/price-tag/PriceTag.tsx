import React from "react";
import "./PriceTag.scss";
import { PriceTagProps } from "./PriceTag.d";

export default class PriceTag extends React.Component<PriceTagProps> {
  render() {
    return (
      <div>
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
