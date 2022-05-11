import { Component } from "react";

import { ProductGridCardProps } from "./ProductGridCard.d";

// Components
import PriceTag from "../../atoms/price-tag/PriceTag";
import AddToCartIcon from "../../atoms/add-to-cart-icon/AddToCartIcon";

// Styles
import "./ProductGridCard.scss";
import { Link } from "react-router-dom";

export default class ProductGridCard extends Component<ProductGridCardProps> {
  render() {
    let product = this.props.product;
    return (
      <Link
        to={`${product.inStock ? "#" : `/products/${product.id}`} `}
        id="product-grid-card"
        className={` ${product.inStock ? "out-of-stock" : ""} `}
      >
        <img
          src={product.gallery[0]}
          alt="Product Image"
          className="product-image"
        />

        {product.inStock && (
          <div className="out-of-stock-text">out of stock</div>
        )}
        <p className="product-name">{product.name}</p>
        <div className="price-tag">
          <PriceTag prices={product.prices} fontMedium={true} />
        </div>
        <div className="cart-icon">
          <AddToCartIcon />
        </div>
      </Link>
    );
  }
}
