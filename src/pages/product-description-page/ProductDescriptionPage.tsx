import { Component } from "react";
import ProductDescriptionTemplate from "../../components/templates/product-description-template/ProductDescriptionTemplate";
import { ProductDescriptionPageProps } from "./ProductDescriptionPage.d";
import { withRouter } from "../../with-router/withRouter";
import { requestData } from "../../services/requestData";
import { singleProductQuery } from "../../services/queries";
import { AttributeSet, Product } from "../../types/Product";
import { Price } from "../../types/Currency";

class ProductDescriptionPage extends Component<ProductDescriptionPageProps> {
  state: {
    loading: boolean;
    product: Product;
  } = {
    loading: true,
    product: {
      id: "",
      name: "",
      category: "",
      description: "",
      brand: "",
      gallery: [],
      inStock: false,
      attributes: [] as AttributeSet[],
      prices: [] as Price[],
    },
  };

  async componentDidMount() {
    const productId = this.props.match.params.id;
    const { data } = await requestData(singleProductQuery(productId));
    const product: Product = data.product;
    this.setState({
      product: product,
      loading: false,
    });
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

export default withRouter(ProductDescriptionPage);
