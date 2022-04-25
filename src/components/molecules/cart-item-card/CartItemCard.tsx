import { Component } from "react";
import AppButton from "../../atoms/app-button/AppButton";
import ItemName from "../../atoms/item-name/ItemName";
import PriceTag from "../../atoms/price-tag/PriceTag";
import CartImageCard from "../../molecules/cart-image-card/CartImageCard";
import Colors from "../../molecules/colors/Colors";
import Sizes from "../../molecules/sizes/Sizes";
import "./CartItemCard.scss";

export default class CartItemCard extends Component {
  render() {
    return (
      <div id="cart-item-summary">
        {/* left side */}
        <div className="left">
          <div className="item-name">
            <ItemName />
          </div>
          <div className="price-tag">
            <PriceTag price={50} fontBold={true} />
          </div>
          <div className="sizes">
            <Sizes />
          </div>
          <div className="colors">
            <Colors />
          </div>
        </div>

        {/* right side */}
        <div className="right">
          <div className="cart-btns">
            <div className="cart-btn">
              <AppButton variant="secondary" fontSize="2.4rem">
                +
              </AppButton>
            </div>
            <p className="cart-count">1</p>
            <div className="cart-btn">
              <AppButton variant="secondary" fontSize="2.4rem">
                -
              </AppButton>
            </div>
          </div>
          <div className="cart-image-card">
            <CartImageCard />
          </div>
        </div>
      </div>
    );
  }
}
