import { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

// Components
import AppButton from "../../atoms/app-button/AppButton";
import ItemName from "../../atoms/item-name/ItemName";
import PriceTag from "../../atoms/price-tag/PriceTag";
import Swatch from "../swatch/Swatch";
import TextAttribute from "../text-attribute/TextAtrribute";

// Styles
import "./CartOverlayItemCard.scss";

import { CartItemCardProps } from "../cart-item-card/CartItemCard.d";
import { RootState } from "../../../state/reducers";
import { CartAction } from "../../../state/actions/cart";
import { actionCreators } from "../../../state";
import { CartItemSchema } from "../../../types/CartItem";
import { CartActionType } from "../../../state/action-types";
import { getInitialAttributeIndex } from "../text-attribute/TextAtrribute.functions";
import { CartOverlayItemCardProps } from "./CartOverlayItemCard.d";
import { updateCartQuantityCount } from "../cart-item-card/CartItemCard.functions";

class CartOverlayItemCard extends Component<CartOverlayItemCardProps> {
  render() {
    const cartItem = this.props.cartItem;

    const initialTextAttributes = this.props.productAttributes.filter(
      (attribute) => attribute.type === "text"
    );
    const initialSwatchAttributes = this.props.productAttributes.filter(
      (attribute) => attribute.type === "swatch"
    );
    return (
      <div id="cart-overlay-item-card">
        {/* left side */}
        <div className="left">
          <div className="item-name">
            <ItemName
              inCartItemOverlay
              name={cartItem.name}
              brand={cartItem.brand}
            />
          </div>
          <div className="price-tag">
            <PriceTag prices={cartItem.prices} fontMedium />
          </div>
          {initialTextAttributes.map((attribute, index) => (
            <div className="text-attributes" key={attribute.id}>
              <TextAttribute
                initialAtrributeIndex={getInitialAttributeIndex(
                  this.props.cartItem.attributes.filter(
                    (item) => item.name !== "Color"
                  )[index].attribute,
                  attribute
                )}
                attributeSet={attribute}
                variant="cart-overlay-item"
              />
            </div>
          ))}
          {initialSwatchAttributes.length > 0 && (
            <div className="swatch">
              <Swatch
                initialAtrributeIndex={getInitialAttributeIndex(
                  this.props.cartItem.attributes.filter(
                    (item) => item.name === "Color"
                  )[0].attribute,
                  initialSwatchAttributes[0]
                )}
                swatchSet={initialSwatchAttributes[0]}
                variant="cart-overlay-item"
              />
            </div>
          )}
        </div>

        {/* right side */}
        <div className="right">
          <div className="cart-btns">
            <div className="cart-btn">
              <AppButton
                onClick={() =>
                  updateCartQuantityCount(
                    cartItem,
                    CartActionType.INCREMENT_CART_QUANTITY,
                    this.props.updateCartQuantity
                  )
                }
                variant="secondary"
                fontSize="1.8rem"
              >
                +
              </AppButton>
            </div>
            <p className="cart-count">{cartItem.quantity}</p>
            <div className="cart-btn">
              <AppButton
                onClick={() =>
                  updateCartQuantityCount(
                    cartItem,
                    CartActionType.DECREMENT_CART_QUANTITY,
                    this.props.updateCartQuantity
                  )
                }
                variant="secondary"
                fontSize="1.8rem"
              >
                -
              </AppButton>
            </div>
          </div>
          <div className="cart-image-card">
            <img className="cart-image" src={cartItem.gallery[0]} alt="" />
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

function mapDispatchToProps(dispatch: Dispatch<CartAction>) {
  const { incrementCart, decrementCart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return {
    updateCartQuantity: (
      cartItem: CartItemSchema,
      action:
        | CartActionType.INCREMENT_CART_QUANTITY
        | CartActionType.DECREMENT_CART_QUANTITY
    ) => {
      if (action === CartActionType.INCREMENT_CART_QUANTITY)
        return incrementCart(cartItem);
      return decrementCart(cartItem);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartOverlayItemCard);
