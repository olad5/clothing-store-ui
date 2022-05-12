import { Component } from "react";
import { SwatchProps } from "./Swatch.d";

// Styles
import "./Swatch.scss";

export default class Swatch extends Component<SwatchProps> {
  state = {
    active: 0,
  };

  handleClick(e: React.MouseEvent<HTMLButtonElement>, index: number) {
    this.setState({
      active: index,
    });
  }
  render() {
    let colors = this.props.swatchSet.items;
    return (
      <div
        id="swatch"
        className={`

${this.props.variant === "cart-overlay-item" ? "cart-overlay-item" : ""}

`}
      >
        <p>COLOR:</p>
        <div className="swatch-boxes">
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: `${color.value}` }}
              className={`swatch-box swatch-box-${index}
            ${this.state.active === index ? "current" : ""}
              `}
              onClick={(e) => this.handleClick(e, index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
