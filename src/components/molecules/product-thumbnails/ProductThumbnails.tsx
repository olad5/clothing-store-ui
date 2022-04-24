import { Component } from "react";
import ProductThumbnail from "../../../assets/images/cart-item-card-image.png";
import "./ProductThumbnails.scss";

export default class ProductThumbnails extends Component {
  render() {
    return (
      <div id="product-thumbnails">
        <img src={ProductThumbnail} alt="Product thumbnail" />
        <img src={ProductThumbnail} alt="Product thumbnail" />
        <img src={ProductThumbnail} alt="Product thumbnail" />
      </div>
    );
  }
}
