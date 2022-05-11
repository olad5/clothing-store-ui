import { Component } from "react";
import { TextAttributeProps } from "./TextAtrribute.d";

// Components
import AppButton from "../../atoms/app-button/AppButton";

// Styles
import "./TextAtrribute.scss";

export default class TextAttribute extends Component<TextAttributeProps> {
  render() {
    let sizes = ["XS", "S", "M", "L"];
    return (
      <div
        id="text-attribute"
        className={`

${this.props.variant === "cart-overlay-item" ? "cart-overlay-item" : ""}

`}
      >
        <p>SIZE:</p>
        <div className="attribute-boxes">
          {sizes.map((size, index) => (
            <div key={index} className="attribute-btn">
              <AppButton variant="secondary">{size}</AppButton>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
