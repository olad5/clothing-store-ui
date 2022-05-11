import { Component } from "react";

// Components
import ProductThumbnails from "../../molecules/product-thumbnails/ProductThumbnails";
import ItemName from "../../atoms/item-name/ItemName";
import Swatch from "../../molecules/swatch/Swatch";
import TextAttribute from "../../molecules/text-attribute/TextAtrribute";
import PriceTag from "../../atoms/price-tag/PriceTag";
import AppButton from "../../atoms/app-button/AppButton";
import { ProductDescriptionTemplateProps } from "./ProductDescriptionTemplateProps.d";

// Styles
import "./ProductDescriptionTemplate.scss";

export default class ProductDescriptionTemplate extends Component<ProductDescriptionTemplateProps> {
  render() {
    let product = this.props.product;
    let swatchAttributes = product.attributes.filter(
      (attribute) => attribute.type === "swatch"
    );
    let textAttributes = product.attributes.filter(
      (attribute) => attribute.type === "text"
    );

    return (
      <div id="product-description-template">
        <div className="content">
          <div className="thumbnails">
            <ProductThumbnails gallery={product.gallery} />
          </div>
          <div className="product-image">
            <img
              src={product.gallery[0]}
              alt=" Main Product Image"
              className="main-product-image"
            />
          </div>
          <div className="right">
            <div className="item-name">
              <ItemName name={product.name} brand={product.brand} />
            </div>
            {textAttributes.map((attribute, index) => (
              <div className="text-attribute" key={attribute.id}>
                <TextAttribute
                  attributeSet={attribute}
                  variant="cart-item-card"
                />
              </div>
            ))}
            <div className="swatch">
              <Swatch />
            </div>
            <div className="price-tag">
              <h4>PRICE:</h4>
              <PriceTag prices={product.prices} fontBold={true} />
            </div>
            <div className="app-btn">
              <AppButton>add to cart</AppButton>
            </div>
            <p className="description-text">
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
