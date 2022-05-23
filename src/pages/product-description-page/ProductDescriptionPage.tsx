import { Component } from "react";
import { connect } from "react-redux";
import ProductDescriptionTemplate from "../../components/templates/product-description-template/ProductDescriptionTemplate";
import { RootState } from "../../state/reducers";
import {
  ProductDescriptionPageProps,
  LinkStateProps,
} from "./ProductDescriptionPage.d";
import {
  withRouter,
  WithRouterProps,
  Params,
} from "../../with-router/withRouter";
import { Navigate } from "react-router-dom";

class ProductDescriptionPage extends Component<ProductDescriptionPageProps> {
  state = {
    loading: true,
    product: this.props.product,
  };

  render() {
    if (!this.props.product.inStock) {
      return <Navigate to="/products" />;
    } else
      return (
        <div>
          <ProductDescriptionTemplate product={this.props.product} />
        </div>
      );
  }
}

function mapStateToProps(
  state: RootState,
  ownProps: WithRouterProps<Params>
): LinkStateProps {
  const products = state.products.products;
  let product = products.filter(
    (product) => product.id === ownProps.match.params.id
  )[0];

  return {
    product: product,
  };
}
export default withRouter(connect(mapStateToProps)(ProductDescriptionPage));
