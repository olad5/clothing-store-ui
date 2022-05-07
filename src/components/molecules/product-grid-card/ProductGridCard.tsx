import { Component } from "react";

import { ProductGridCardProps } from "./ProductGridCard.d";

// Components
import PriceTag from "../../atoms/price-tag/PriceTag";
import AddToCartIcon from "../../atoms/add-to-cart-icon/AddToCartIcon";

// Styles
import "./ProductGridCard.scss";

export default class ProductGridCard extends Component<ProductGridCardProps> {
  render() {
    let product = this.props.product;
    return (
      <div
        id="product-grid-card"
        className={` ${this.props.outOfStock ? "out-of-stock" : ""} `}
      >
        <img
          src={product.gallery[0]}
          alt="Product Image"
          className="product-image"
        />

        {this.props.outOfStock && (
          <div className="out-of-stock-text">out of stock</div>
        )}
        <p className="product-name">{product.name}</p>
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
