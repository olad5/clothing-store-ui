import { Component } from "react";

import { ProductGridCardProps } from "./ProductGridCard.d";

// Components
import PriceTag from "../../atoms/price-tag/PriceTag";
import ProductItemImage from "../../../assets/images/product-A.png";
import AddToCartIcon from "../../atoms/add-to-cart-icon/AddToCartIcon";

// Styles
import "./ProductGridCard.scss";

export default class ProductGridCard extends Component<ProductGridCardProps> {
  render() {
    return (
      <div
        id="product-grid-card"
        className={` ${this.props.outOfStock ? "out-of-stock" : ""} `}
      >
        <img
          src={ProductItemImage}
          alt="Product Image"
          className="product-image"
        />
        {this.props.outOfStock ? (
          <div className="out-of-stock-text">out of stock</div>
        ) : null}
        <p className="product-name">Apollo Running Street</p>
        <div className="price-tag">
          <PriceTag price={50} fontMedium={true} />
        </div>
        <div className="cart-icon">
          <AddToCartIcon />
        </div>
      </div>
    );
  }
}
