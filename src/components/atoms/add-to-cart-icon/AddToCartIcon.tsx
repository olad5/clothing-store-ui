import { Component } from "react";
import CartIcon from "../../../assets/icons/empty-cart-icon-white-fill.svg";
import "./AddToCartIcon.scss";
import { AddToCartIconProps } from "./AddToCartIcon.d";

export default class AddToCartIcon extends Component<AddToCartIconProps> {
  render() {
    return (
      <button onClick={this.props.handleClick} id="add-to-cart-icon">
        <img src={CartIcon} alt="cart icon" />
      </button>
    );
  }
}
