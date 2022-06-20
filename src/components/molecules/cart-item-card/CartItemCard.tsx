import { Component } from "react";
import { connect } from "react-redux";

// Components
import AppButton from "../../atoms/app-button/AppButton";
import ItemName from "../../atoms/item-name/ItemName";
import PriceTag from "../../atoms/price-tag/PriceTag";
import CartImageCard from "../../molecules/cart-image-card/CartImageCard";
import Swatch from "../../molecules/swatch/Swatch";
import TextAttribute from "../../molecules/text-attribute/TextAtrribute";
import { CartItemCardProps } from "./CartItemCard.d";
import DeleteCartItemIcon from "../../../assets/icons/trash-can-icon.svg";

// Styles
import "./CartItemCard.scss";

import { getInitialAttributeIndex } from "../text-attribute/TextAtrribute.functions";
import { CartAction } from "../../../state/actions/cart";
import { bindActionCreators, Dispatch } from "redux";
import { actionCreators } from "../../../state";
import { CartItemSchema } from "../../../types/CartItem";
import {
  deleteItemFromCart,
  updateCartQuantityCount,
} from "./CartItemCard.functions";
import { CartActionType } from "../../../state/action-types";
import { requestData } from "../../../services/requestData";
import { singleProductInitialAttributesQuery } from "../../../services/queries";
import { AttributeSet } from "../../../types/Product";

class CartItemCard extends Component<CartItemCardProps> {
  state: {
    loading: boolean;
    initialProductAttributes: AttributeSet[];
  } = {
    loading: true,
    initialProductAttributes: [] as AttributeSet[],
  };

  async componentDidMount() {
    const productId = this.props.cartItem.id;
    const { data } = await requestData(
      singleProductInitialAttributesQuery(productId)
    );
    const initialProductAttributes: AttributeSet[] = data.product.attributes;

    this.setState({
      initialProductAttributes: initialProductAttributes,
      loading: false,
    });
    return;
  }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }
    const cartItem = this.props.cartItem;

    const initialTextAttributes = this.state.initialProductAttributes.filter(
      (attribute) => attribute.type === "text"
    );
    const initialSwatchAttributes = this.state.initialProductAttributes.filter(
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
          {initialTextAttributes.map((attribute, index) => (
            <div className="text-attribute" key={attribute.id}>
              <TextAttribute
                initialAtrributeIndex={getInitialAttributeIndex(
                  this.props.cartItem.attributes.filter(
                    (item) => item.name !== "Color"
                  )[index].attribute,
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
                initialAtrributeIndex={getInitialAttributeIndex(
                  this.props.cartItem.attributes.filter(
                    (item) => item.name === "Color"
                  )[0].attribute,
                  initialSwatchAttributes[0]
                )}
                swatchSet={initialSwatchAttributes[0]}
                variant="cart-item-card"
              />
            </div>
          )}
        </div>

        {/* right side */}
        <div className="right">
          <div className="cart-btns">
            <div className="horizontal-btns">
              <button
                className="delete-cartItem-btn"
                onClick={() =>
                  deleteItemFromCart(cartItem, this.props.removeProductFromCart)
                }
              >
                <img
                  src={DeleteCartItemIcon}
                  alt="Delete Item from cart"
                  className="delete-cartItem-icon"
                />
              </button>
            </div>

            <div className="vertical-btns">
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
                >
                  -
                </AppButton>
              </div>
            </div>
          </div>
          <div className="cart-image-card">
            <CartImageCard gallery={this.props.cartItem.gallery} />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<CartAction>) {
  const { incrementCart, decrementCart, removeProductFromCart } =
    bindActionCreators(actionCreators, dispatch);

  return {
    removeProductFromCart: (cartItem: CartItemSchema) =>
      removeProductFromCart(cartItem),

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

export default connect(null, mapDispatchToProps)(CartItemCard);
