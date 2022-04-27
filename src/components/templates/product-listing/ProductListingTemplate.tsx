import { Component } from "react";
import Navbar from "../../organisms/nav-bar/NavBar";
import ProductsGrid from "../../organisms/products-grid/ProductsGrid";
import "./ProductListingTemplate.scss";

export default class ProductListingTemplate extends Component {
  render() {
    return (
      <div id="product-listing-template" className="container">
        <Navbar />
        <h1>Category Name</h1>
        <div className="products-grid">
          <ProductsGrid />
        </div>
      </div>
    );
  }
}
