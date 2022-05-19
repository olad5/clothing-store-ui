import { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../../state/reducers";

// Components
import AppButton from "../../atoms/app-button/AppButton";
import ItemName from "../../atoms/item-name/ItemName";
import PriceTag from "../../atoms/price-tag/PriceTag";
import CartImageCard from "../../molecules/cart-image-card/CartImageCard";
import Swatch from "../../molecules/swatch/Swatch";
import TextAttribute from "../../molecules/text-attribute/TextAtrribute";
import { CartItemCardProps } from "./CartItemCard.d";

// Styles
import "./CartItemCard.scss";

import { getInitialAttribute } from "../text-attribute/TextAtrribute.functions";
import { CartItemSchema } from "../../../types/CartItem";

class CartItemCard extends Component<CartItemCardProps> {
  render() {
    const cartItem = this.props.cartItem;

    const initialTextAttributes = this.props.productAttributes.filter(
      (attribute) => attribute.type === "text"
    );
    const initialSwatchAttributes = this.props.productAttributes.filter(
      (attribute) => attribute.type === "swatch"
    );

    return (
      <div id="cart-item-summary">
        {/* left side */}
        <div className="left">
          <div className="item-name">
            <ItemName name={cartItem.name} brand={cartItem.brand} />
          </div>
          <div className="price-tag">
            <PriceTag prices={cartItem.prices} fontBold />
          </div>
          {initialTextAttributes.map((attribute) => (
            <div className="text-attribute" key={attribute.id}>
              <TextAttribute
                initialAtrributeIndex={getInitialAttribute(
                  cartItem.attributes[0].attribute,
                  attribute
                )}
                attributeSet={attribute}
                variant="cart-item-card"
              />
            </div>
          ))}
          {initialSwatchAttributes.length > 0 && (
            <div className="swatch">
              <Swatch
                initialAtrributeIndex={getInitialAttribute(
                  this.props.cartItem.attributes.filter(
                    (item) => item.name === "Color"
                  )[0].attribute,
                  initialSwatchAttributes[0]
                )}
                swatchSet={initialSwatchAttributes[0]}
              />
            </div>
          )}
        </div>

        {/* right side */}
        <div className="right">
          <div className="cart-btns">
            <div className="cart-btn">
              <AppButton
                onClick={() => {}}
                variant="secondary"
                fontSize="2.4rem"
              >
                +
              </AppButton>
            </div>
            <p className="cart-count">1</p>
            <div className="cart-btn">
              <AppButton
                onClick={() => {}}
                variant="secondary"
                fontSize="2.4rem"
              >
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

function mapStateToProps(
  state: RootState,
  ownProps: Pick<CartItemCardProps, "cartItem">
) {
  return {
    productAttributes: state.products.products.filter(
      (item) => item.id === ownProps.cartItem.id
    )[0].attributes,
  };
}

export default connect(mapStateToProps)(CartItemCard);
