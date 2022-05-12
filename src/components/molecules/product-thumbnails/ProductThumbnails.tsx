import { Component } from "react";
import "./ProductThumbnails.scss";
import { ProductThumbnailsProps } from "./ProductThumbnails.d";

export default class ProductThumbnails extends Component<ProductThumbnailsProps> {
  state = {
    active: 0,
  };

  handleClick(e: React.MouseEvent<HTMLButtonElement>, index: number) {
    this.setState({
      active: index,
    });
    this.props.handleThumbnailChange(e, index);
  }

  render() {
    return (
      <div id="product-thumbnails">
        {this.props.gallery.map((image, index) => (
          <button
            key={index}
            className={`product-thumbnail ${
              this.state.active === index ? "current" : ""
            } `}
            onClick={(e) => this.handleClick(e, index)}
          >
            <img src={image} alt="Product thumbnail" />
          </button>
        ))}
      </div>
    );
  }
}
