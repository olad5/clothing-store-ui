import { Component } from "react";
import { ItemNameProps } from "./ItemName.d";

// Styles
import "./ItemName.scss";

export default class ItemName extends Component<ItemNameProps> {
  render() {
    return (
      <div
        id="item-name"
        className={`
        ${this.props.inCartItemOverlay ? "cart-item-overlay" : ""}
        `}
      >
        <p className="name">{this.props.name}</p>
        <p className="brand">{this.props.brand}</p>
      </div>
    );
  }
}
