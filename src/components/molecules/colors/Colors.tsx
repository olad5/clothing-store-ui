import { Component } from "react";
import { ColorsProps } from "./Colors.d";

// Styles
import "./Colors.scss";

export default class Colors extends Component<ColorsProps> {
  render() {
    let colors = ["grey", "black", "darkgreen"];
    let active = false;

    return (
      <div
        id="colors"
        className={`

${this.props.variant === "cart-overlay-item" ? "cart-overlay-item" : ""}

`}
      >
        <p>COLOR:</p>
        <div className="color-boxes">
          {colors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: `${color}` }}
              className={`color-box color-box-${index}
            ${active ? "current" : ""}


`}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}
