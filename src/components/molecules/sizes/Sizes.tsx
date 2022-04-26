import { Component } from "react";
import { SizesProps } from "./Sizes.d";

// Components
import AppButton from "../../atoms/app-button/AppButton";

// Styles
import "./Sizes.scss";

export default class Sizes extends Component<SizesProps> {
  render() {
    let sizes = ["XS", "S", "M", "L"];
    return (
      <div
        id="sizes"
        className={`

${this.props.variant === "cart-overlay-item" ? "cart-overlay-item" : ""}

`}
      >
        <p>SIZE:</p>
        <div className="size-boxes">
          {sizes.map((size, index) => (
            <div key={index} className="size-btn">
              <AppButton variant="secondary">{size}</AppButton>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
