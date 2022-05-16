import { Component } from "react";
import { Attribute } from "../../../types/Product";
import { SwatchProps } from "./Swatch.d";

// Styles
import "./Swatch.scss";

export default class Swatch extends Component<SwatchProps> {
  state = {
    active: 0,
  };

  handleClick(
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
    attribute: { name: string; attribute: Attribute }
  ) {
    this.setState({
      active: index,
    });
    this.props.handleSwatchSelection(e, attribute);
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
              onClick={(e) =>
                this.handleClick(e, index, {
                  name: this.props.swatchSet.name,
                  attribute: color,
                })
              }
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
