import { Component } from "react";
// Components
import ProductThumbnails from "../../molecules/product-thumbnails/ProductThumbnails";
import Navbar from "../../organisms/nav-bar/NavBar";
import ProductItemImage from "../../../assets/images/product-A.png";

// Styles
import "./ProductDescriptionTemplate.scss";
import ItemName from "../../atoms/item-name/ItemName";
import Sizes from "../../molecules/sizes/Sizes";
import Colors from "../../molecules/colors/Colors";
import PriceTag from "../../atoms/price-tag/PriceTag";
import AppButton from "../../atoms/app-button/AppButton";

export default class ProductDescriptionTemplate extends Component {
  render() {
    return (
      <div id="product-description-template" className="container">
        <Navbar />
        <div className="content">
          <div className="thumbnails">
            <ProductThumbnails />
          </div>
          <div className="product-image">
            <img
              src={ProductItemImage}
              alt=" Main Product Image"
              className="main-product-image"
            />
          </div>
          <div className="right">
            <div className="item-name">
              <ItemName />
            </div>
            <div className="sizes">
              <Sizes variant="cart-item-card" />
            </div>
            <div className="colors">
              <Colors />
            </div>
            <div className="price-tag">
              <h4>PRICE:</h4>
              <PriceTag price={50} fontBold={true} />
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
