import { Component } from "react";
import AppButton from "../../atoms/app-button/AppButton";
import "./CartImageCard.scss";
import { CartImageCardProps } from "./CartImageCard.d";

export default class CartImageCard extends Component<CartImageCardProps> {
  state = {
    active: 0,
  };

  handleBtnClick(action: "prev" | "next") {
    if (action === "prev") {
      return this.setState({
        active:
          this.state.active > 0 && this.state.active < this.props.gallery.length
            ? this.state.active - 1
            : this.state.active,
      });
    }
    return this.setState({
      active:
        this.state.active > -1 &&
        this.state.active < this.props.gallery.length - 1
          ? this.state.active + 1
          : this.state.active,
    });
  }

  render() {
    return (
      <div id="cart-image-card">
        <img
          className="item-image"
          src={this.props.gallery[this.state.active]}
          alt="cart item card image"
        />

        {this.props.gallery.length > 1 && (
          <div className="image-btns">
            <AppButton
              onClick={() => this.handleBtnClick("prev")}
              variant="tertiary"
            >
              {"<"}
            </AppButton>
            <AppButton
              onClick={() => this.handleBtnClick("next")}
              variant="tertiary"
            >
              {">"}
            </AppButton>
          </div>
        )}
      </div>
    );
  }
}
