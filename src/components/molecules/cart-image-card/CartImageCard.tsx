import { Component } from "react";
import CartItemImage from "../../../assets/images/cart-item-card-image.png";
import AppButton from "../../atoms/app-button/AppButton";
import "./CartImageCard.scss";

export default class CartImageCard extends Component {
  render() {
    return (
      <div id="cart-image-card">
        <img
          className="item-image"
          src={CartItemImage}
          alt="cart item card image"
        />

        <div className="image-btns">
          <AppButton variant="secondary">{"<"}</AppButton>
          <AppButton variant="secondary">{">"}</AppButton>
        </div>
      </div>
    );
  }
}
