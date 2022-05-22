import { Component } from "react";

// Components
import CartItemCard from "../../molecules/cart-item-card/CartItemCard";
import AppButton from "../../atoms/app-button/AppButton";

import { CartTemplateProps } from "./CartTemplate.d";

// Styles
import "./CartTemplate.scss";

export default class CartTemplate extends Component<CartTemplateProps> {
  render() {
    const cart = this.props.cart;

    return (
      <div id="cart-template">
        <h1>CART</h1>
        <div className="cart-items">
          <hr className="line" />
          {cart.map((cartItem) => (
            <div key={cartItem.cartId}>
              <CartItemCard cartItem={cartItem} />
              <hr className="line" />
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="breakdown-text">
            <p>
              Tax:{" "}
              <span className="bold-text">
                {this.props.currentCurrency.symbol}

                {this.props.tax.toFixed(2)}
              </span>
            </p>
            <p>
              Qty: <span className="bold-text">{cart.length}</span>
            </p>
          </div>
          <p className="total-text">
            Total:{" "}
            <span className="bold-text">
              {this.props.currentCurrency.symbol}

              {this.props.cartTotalAmount.toFixed(2)}
            </span>
          </p>
          <div className="app-btn">
            <AppButton onClick={() => {}}>order</AppButton>
          </div>
        </div>
      </div>
    );
  }
}
