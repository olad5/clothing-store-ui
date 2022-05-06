import { Component } from "react";
import ProductsGrid from "../../organisms/products-grid/ProductsGrid";
import "./ProductListingTemplate.scss";

export default class ProductListingTemplate extends Component {
  render() {
    return (
      <div id="product-listing-template">
        <div className="products-grid">
          <ProductsGrid />
        </div>
      </div>
    );
  }
}
