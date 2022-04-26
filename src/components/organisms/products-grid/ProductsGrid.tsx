import { Component } from "react";
import ProductGridCard from "../../molecules/product-grid-card/ProductGridCard";
import "./ProductsGrid.scss";

export default class ProductsGrid extends Component {
  render() {
    let products = Array(12).fill(0);

    return (
      <div id="products-grid">
        <div className="products-gallery">
          {products.map((product, index) => (
            <ProductGridCard />
          ))}
        </div>
      </div>
    );
  }
}
