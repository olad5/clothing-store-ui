import { Component } from "react";
import { TextAttributeProps } from "./TextAtrribute.d";

// Styles
import "./TextAtrribute.scss";

export default class TextAttribute extends Component<TextAttributeProps> {
  state = {
    active: 0,
  };

  handleClick(e: React.MouseEvent<HTMLButtonElement>, index: number) {
    this.setState({
      active: index,
    });
  }

  render() {
    const attributeSet = this.props.attributeSet;

    return (
      <div
        id="text-attribute"
        className={`
          ${
            this.props.variant === "cart-overlay-item"
              ? "cart-overlay-item"
              : ""
          }
        `}
      >
        <p>{attributeSet.name}:</p>
        <div className="attribute-boxes">
          {attributeSet.items.map((attribute, index) => (
            <button
              key={attribute.id}
              className={`text-attribute-box 
            ${this.state.active === index ? "current" : ""}
              `}
              onClick={(e) => this.handleClick(e, index)}
            >
              {attribute.displayValue}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
