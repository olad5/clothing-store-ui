import { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../../state/reducers";
import { ProductsGridProps } from "./ProductsGrid.d";
import { actionCreators } from "../../../state/";
import { ProductAction } from "../../../state/actions/products";
import { bindActionCreators, Dispatch } from "redux";

// Components
import ProductGridCard from "../../molecules/product-grid-card/ProductGridCard";

// Styles
import "./ProductsGrid.scss";

class ProductsGrid extends Component<ProductsGridProps> {
  componentDidMount() {
    this.props.getCategoryProducts("all");
  }
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

function mapDispatchToProps(dispatch: Dispatch<ProductAction>) {
  const { getCategoryProducts } = bindActionCreators(actionCreators, dispatch);

  return {
    getCategoryProducts: (category: string) => getCategoryProducts(category),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsGrid);
