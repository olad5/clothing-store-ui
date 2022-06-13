import { Component } from "react";
import parse from "html-react-parser";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

// Components
import ProductThumbnails from "../../molecules/product-thumbnails/ProductThumbnails";
import ItemName from "../../atoms/item-name/ItemName";
import Swatch from "../../molecules/swatch/Swatch";
import TextAttribute from "../../molecules/text-attribute/TextAtrribute";
import PriceTag from "../../atoms/price-tag/PriceTag";
import AppButton from "../../atoms/app-button/AppButton";

import { CartAction } from "../../../state/actions/cart";
import { actionCreators } from "../../../state";
import { CartItem, CartItemAttribute } from "../../../types/CartItem.d";
import { Product } from "../../../types/Product";
import {
  ProductDescriptionTemplateProps,
  StateProps,
} from "./ProductDescriptionTemplateProps.d";

// Styles
import "./ProductDescriptionTemplate.scss";
import { getInitialTextAttributes } from "../../molecules/text-attribute/TextAtrribute.functions";
import { getInitialSwatchAttributes } from "../../molecules/swatch/Swatch.functions";
import { getInitialAttributes } from "./ProductDescriptionTemplate.functions";

class ProductDescriptionTemplate extends Component<ProductDescriptionTemplateProps> {
  textAttributes = getInitialTextAttributes(this.props.product);

  swatchAttributes = getInitialSwatchAttributes(this.props.product);

  initialAttributes = getInitialAttributes(
    this.textAttributes,
    this.swatchAttributes
  );

  state: StateProps = {
    currentDisplayImageIndex: 0,
    attributes: this.initialAttributes,
    swatchColor: null,
  };

  handleThumbnailChange = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    this.setState({
      currentDisplayImageIndex: index,
    });
  };

  handleTextAttributeSelection = (
    e: React.MouseEvent<HTMLButtonElement>,
    attribute: CartItemAttribute
  ) => {
    this.setState((state) => {
      let filteredAttributes = this.state.attributes.filter(
        (currentAttribute) => currentAttribute.name !== attribute.name
      );

      return { attributes: [...filteredAttributes, attribute] };
    });
  };

  handleSwatchSelection = (
    e: React.MouseEvent<HTMLButtonElement>,
    attribute: CartItemAttribute
  ) => {
    this.setState((state) => {
      let filteredAttributes = this.state.attributes.filter(
        (currentAttribute) => currentAttribute.name !== attribute.name
      );

      return { attributes: [...filteredAttributes, attribute] };
    });
  };

  addToCart = () => {
    this.props.addProductToCart(this.props.product, this.state.attributes);
  };

  render() {
    const product = this.props.product;

    return (
      <div id="product-description-template">
        <div className="content">
          <div className="thumbnails">
            <ProductThumbnails
              gallery={product.gallery}
              handleThumbnailChange={this.handleThumbnailChange}
            />
          </div>
          <div className="product-image">
            <img
              src={product.gallery[this.state.currentDisplayImageIndex]}
              alt=" Main Product Image"
              className="main-product-image"
            />
          </div>
          <div className="right">
            <div className="main">
              <div className="item-name">
                <ItemName name={product.name} brand={product.brand} />
              </div>
              {this.textAttributes.map((attribute) => (
                <div className="text-attribute" key={attribute.id}>
                  <TextAttribute
                    initialAtrributeIndex={0}
                    attributeSet={attribute}
                    variant="cart-item-card"
                    handleTextAttributeSelection={
                      this.handleTextAttributeSelection
                    }
                  />
                </div>
              ))}
              {this.swatchAttributes.length > 0 && (
                <div className="swatch">
                  <Swatch
                    initialAtrributeIndex={0}
                    swatchSet={this.swatchAttributes[0]}
                    handleSwatchSelection={this.handleSwatchSelection}
                  />
                </div>
              )}
              <div className="price-tag">
                <h4>PRICE:</h4>
                <PriceTag prices={product.prices} fontBold />
              </div>
              <div className="app-btn">
                <AppButton
                  disabled={this.props.product.inStock ? false : true}
                  onClick={this.addToCart}
                >
                  add to cart
                </AppButton>
              </div>
              <div className="description-text">
                {parse(product.description)}
              </div>
            </div>
          </div>
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

export default connect(null, mapToDispatchProps)(ProductDescriptionTemplate);
