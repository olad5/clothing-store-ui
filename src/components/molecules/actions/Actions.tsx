import { Component } from "react";

// Components
import EmptyCartIcon from "../../../assets/icons/empty-cart-icon.svg";

// Styles;
import "./Actions.scss";

export default class Actions extends Component {
  render() {
    return (
      <div id="actions">
        <div className="currency-switcher">
          <div className="currency-switcher-text">
            <p className="currency">$</p>
            <p className="arrow">^</p>
          </div>
        </div>
        <div className="cart-icon">
          <div className="cart-items-count">3</div>
          <img src={EmptyCartIcon} alt=" cart icon" />
        </div>
      </div>
    );
  }
}
