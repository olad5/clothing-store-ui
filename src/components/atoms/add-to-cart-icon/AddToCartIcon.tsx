import { Component } from "react";
import CartIcon from "../../../assets/icons/empty-cart-icon-white-fill.svg";
import "./AddToCartIcon.scss";

export default class AddToCartIcon extends Component {
  render() {
    return (
      <div id="add-to-cart-icon">
        <img src={CartIcon} alt="cart icon" />
      </div>
    );
  }
}
