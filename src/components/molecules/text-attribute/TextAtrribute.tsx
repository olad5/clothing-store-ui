import { Component } from "react";
import { CartItemAttribute } from "../../../types/CartItem";
import { TextAttributeProps } from "./TextAtrribute.d";

// Styles
import "./TextAtrribute.scss";

export default class TextAttribute extends Component<TextAttributeProps> {
  state = {
    active: 0,
  };

  handleClick(
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
    attribute: CartItemAttribute
  ) {
    this.setState({
      active: index,
    });
    this.props.handleTextAttributeSelection(e, attribute);
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
              onClick={(e) =>
                this.handleClick(e, index, {
                  name: attributeSet.name,
                  attribute,
                })
              }
            >
              {attribute.displayValue}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
