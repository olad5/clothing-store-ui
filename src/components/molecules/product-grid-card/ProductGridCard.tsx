import { bindActionCreators, Dispatch } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";

import { ProductGridCardProps } from "./ProductGridCard.d";

// Components
import PriceTag from "../../atoms/price-tag/PriceTag";
import AddToCartIcon from "../../atoms/add-to-cart-icon/AddToCartIcon";
import { CartAction } from "../../../state/actions/cart";

import { CartItem, CartItemAttribute } from "../../../types/CartItem.d";
import { Product } from "../../../types/Product";
import { actionCreators } from "../../../state";

import { getInitialAttributes } from "../../templates/product-description-template/ProductDescriptionTemplate.functions";
import { getInitialTextAttributes } from "../text-attribute/TextAtrribute.functions";
import { getInitialSwatchAttributes } from "../swatch/Swatch.functions";

// Styles
import "./ProductGridCard.scss";

class ProductGridCard extends Component<ProductGridCardProps> {
  handleCartIconClick(product: Product) {
    this.props.addProductToCart(
      product,
      getInitialAttributes(
        getInitialTextAttributes(product),
        getInitialSwatchAttributes(product)
      )
    );
  }

  render() {
    let product = this.props.product;
    return (
      <div
        className={` ${product.inStock ? "" : "out-of-stock"} `}
        id="product-grid-card"
      >
        <Link to={`${product.inStock ? `/products/${product.id}` : `#`} `}>
          <img
            src={product.gallery[0]}
            alt="Product"
            className="product-image"
          />

          {!product.inStock && (
            <div className="out-of-stock-text">out of stock</div>
          )}
          <p className="product-name">
            {product.brand} {product.name}
          </p>
          <div className="price-tag">
            <PriceTag prices={product.prices} fontMedium />
          </div>
        </Link>
        <div className="cart-icon">
          <AddToCartIcon
            handleClick={() => this.handleCartIconClick(this.props.product)}
          />{" "}
        </div>
      </div>
    );
  }
}

function mapToDispatchProps(dispatch: Dispatch<CartAction>) {
  const { addProductToCart } = bindActionCreators(actionCreators, dispatch);
  return {
    addProductToCart: (product: Product, attributes: CartItemAttribute[]) =>
      addProductToCart(new CartItem(product, 1, attributes).create()),
  };
}

export default connect(null, mapToDispatchProps)(ProductGridCard);
