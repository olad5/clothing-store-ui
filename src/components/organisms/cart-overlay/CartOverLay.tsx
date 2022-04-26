import { Component } from "react";
import AppButton from "../../atoms/app-button/AppButton";

// Components
import CartOverlayItemCard from "../../molecules/cart-overlay-item-card/CartOverlayItemCard";

// Styles
import "./CartOverLay.scss";

export default class CartOverLay extends Component {
  render() {
    let cartItemsPlaceholder = Array(10).fill(0);
    let totalAmt = 200;

    return (
      <div id="cart-overlay">
        <h3 className="cart-overlay-heading">
          My bag,{" "}
          <span className="number-of-items">
            {cartItemsPlaceholder.length} items{" "}
          </span>
        </h3>
        <div
          className={`cart-overlay-items

${cartItemsPlaceholder.length > 2 ? "overflow" : ""}
`}
        >
          {cartItemsPlaceholder.map((value, index) => (
            <CartOverlayItemCard />
          ))}
        </div>
        <div className="cart-overlay-summary">
          <p>Total</p>
          <p>${totalAmt.toFixed(2)}</p>
        </div>

        <div className="cart-overlay-btns">
          <AppButton variant="secondary">view bag</AppButton>
          <AppButton>checkout</AppButton>
        </div>
      </div>
    );
  }
}
