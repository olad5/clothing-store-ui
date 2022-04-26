import { Component } from "react";
import AppButton from "../../atoms/app-button/AppButton";
import ItemName from "../../atoms/item-name/ItemName";
import PriceTag from "../../atoms/price-tag/PriceTag";
import CartItemImage from "../../../assets/images/cart-item-card-image.png";
import Colors from "../colors/Colors";
import Sizes from "../sizes/Sizes";
import "./CartOverlayItemCard.scss";

export default class CartOverlayItemCard extends Component {
  render() {
    return (
      <div id="cart-overlay-item-card">
        {/* left side */}
        <div className="left">
          <div className="item-name">
            <ItemName inCartItemOverlay={true} />
          </div>
          <div className="price-tag">
            <PriceTag price={50} fontMedium={true} />
          </div>
          <div className="sizes">
            <Sizes variant="cart-overlay-item" />
          </div>
          <div className="colors">
            <Colors variant="cart-overlay-item" />
          </div>
        </div>

        {/* right side */}
        <div className="right">
          <div className="cart-btns">
            <div className="cart-btn">
              <AppButton variant="secondary" fontSize="1.8rem">
                +
              </AppButton>
            </div>
            <p className="cart-count">1</p>
            <div className="cart-btn">
              <AppButton variant="secondary" fontSize="1.8rem">
                -
              </AppButton>
            </div>
          </div>
          <div className="cart-image-card">
            <img className="cart-image" src={CartItemImage} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
