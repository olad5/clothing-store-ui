import { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../../state/reducers";
import { ProductsGridProps } from "./ProductsGrid.d";

// Components
import ProductGridCard from "../../molecules/product-grid-card/ProductGridCard";

// Styles
import "./ProductsGrid.scss";

class ProductsGrid extends Component<ProductsGridProps> {
  render() {
    let products = this.props.products;

    return (
      <div id="products-grid">
        <div className="products-gallery">
          {products.map((product, index) => (
            <ProductGridCard key={index} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    products: state.products.products,
  };
}

export default connect(mapStateToProps)(ProductsGrid);
