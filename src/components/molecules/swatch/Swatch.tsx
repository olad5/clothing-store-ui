import { Component } from "react";
import { SwatchProps } from "./Swatch.d";

// Styles
import "./Swatch.scss";

export default class Swatch extends Component<SwatchProps> {
  render() {
    let swatch = ["grey", "black", "darkgreen"];
    let active = false;

    return (
      <div
        id="swatch"
        className={`

${this.props.variant === "cart-overlay-item" ? "cart-overlay-item" : ""}

`}
      >
        <p>COLOR:</p>
        <div className="swatch-boxes">
          {swatch.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: `${color}` }}
              className={`swatch-box swatch-box-${index}
            ${active ? "current" : ""}


`}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}
