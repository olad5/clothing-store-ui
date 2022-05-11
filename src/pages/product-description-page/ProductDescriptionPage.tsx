import { Component } from "react";
import { connect } from "react-redux";
import ProductDescriptionTemplate from "../../components/templates/product-description-template/ProductDescriptionTemplate";
import { RootState } from "../../state/reducers";
import { Product } from "../../types/Product";
import {
  ProductDescriptionPageProps,
  LinkStateProps,
} from "./ProductDescriptionPage.d";
import {
  withRouter,
  WithRouterProps,
  Params,
} from "../../with-router/withRouter";

import { requestData } from "../../services/requestData";
import { singleProductQuery } from "../../services/queries";

class ProductDescriptionPage extends Component<ProductDescriptionPageProps> {
  state = {
    loading: true,
    product: this.props.product,
  };

  async componentDidMount() {
    const { data } = await requestData(
      singleProductQuery({ productId: this.props.match.params.id })
    );
    let product: Product = data.product;
    this.setState(Object.assign({ loading: false }, { product: product }));
  }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    return (
      <div>
        <ProductDescriptionTemplate product={this.state.product} />
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
