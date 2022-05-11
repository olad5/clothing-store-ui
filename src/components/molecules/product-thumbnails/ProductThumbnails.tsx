import { Component } from "react";
import "./ProductThumbnails.scss";
import { ProductThumbnailsProps } from "./ProductThumbnails.d";

export default class ProductThumbnails extends Component<ProductThumbnailsProps> {
  render() {
    return (
      <div id="product-thumbnails">
        {this.props.gallery.map((picture, index) => (
          <img key={index} src={picture} alt="Product thumbnail" />
        ))}
      </div>
    );
  }
}
