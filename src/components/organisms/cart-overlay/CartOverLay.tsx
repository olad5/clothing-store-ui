import { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../../state/reducers";

// Components
import AppButton from "../../atoms/app-button/AppButton";
import CartOverlayItemCard from "../../molecules/cart-overlay-item-card/CartOverlayItemCard";

import { CartOverLayProps } from "./CartOverLay.d";
import { getTotalAmount } from "../../../pages/cart-page/CartPage.functions";

// Styles
import "./CartOverLay.scss";

class CartOverLay extends Component<CartOverLayProps> {
  render() {
    const total = getTotalAmount(this.props.cart, this.props.currentCurrency);
    const cart = this.props.cart;

    return (
      <div id="cart-overlay">
        <h3 className="cart-overlay-heading">
          My bag, <span className="number-of-items">{cart.length} items </span>
        </h3>
        <div
          className={`cart-overlay-items
          ${cart.length > 2 ? "overflow" : ""}
          `}
        >
          {cart.map((cartItem) => (
            <div className="cart-overlay-item" key={cartItem.cartId}>
              <CartOverlayItemCard cartItem={cartItem} />
            </div>
          ))}
        </div>
        <div className="cart-overlay-summary">
          <p>Total</p>
          <p>
            {this.props.currentCurrency.symbol}
            {total.toFixed(2)}
          </p>
        </div>

        <div className="cart-overlay-btns">
          <AppButton
            onClick={() => this.props.handleViewCartBtnClick()}
            variant="secondary"
          >
            view bag
          </AppButton>

          <AppButton onClick={() => {}}>checkout</AppButton>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state: RootState) {
  return {
    cart: state.cart.cart,
    currentCurrency: state.currencies.currentCurrency,
  };
}
export default connect(mapStateToProps)(CartOverLay);
