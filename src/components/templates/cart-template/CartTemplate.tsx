import { Component } from "react";

// Components
import CartItemCard from "../../molecules/cart-item-card/CartItemCard";
import Navbar from "../../organisms/nav-bar/NavBar";
import AppButton from "../../atoms/app-button/AppButton";

// Styles
import "./CartTemplate.scss";

export default class CartTemplate extends Component {
  render() {
    let numOfItems = Array(12).fill(0);
    let tax = 15;
    let total = numOfItems.length * 100;

    return (
      <div id="cart-template" className="container">
        <Navbar />
        <h1>CART</h1>
        <div className="cart-items">
          <hr className="line" />
          {numOfItems.map((item) => (
            <div>
              <CartItemCard />
              <hr className="line" />
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="breakdown-text">
            <p>
              Tax: <span className="bold-text">${tax.toFixed(2)}</span>
            </p>
            <p>
              Qty: <span className="bold-text">{numOfItems.length}</span>
            </p>
          </div>
          <p className="total-text">
            Total: <span className="bold-text">${total.toFixed(2)}</span>
          </p>
          <div className="app-btn">
            <AppButton>order</AppButton>
          </div>
        </div>
      </div>
    );
  }
}
