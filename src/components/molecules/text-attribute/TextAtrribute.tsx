import { Component } from "react";
import { TextAttributeProps } from "./TextAtrribute.d";

// Components
import AppButton from "../../atoms/app-button/AppButton";

// Styles
import "./TextAtrribute.scss";

export default class TextAttribute extends Component<TextAttributeProps> {
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
          {attributeSet.items.map((attribute) => (
            <div key={attribute.id} className="attribute-btn">
              <AppButton variant="secondary">
                {attribute.displayValue}
              </AppButton>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
