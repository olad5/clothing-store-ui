import { Component } from "react";
import { connect } from "react-redux";
import CartTemplate from "../../components/templates/cart-template/CartTemplate";
import { RootState } from "../../state/reducers";
import { CartPageProps } from "./CartPage.d";

class CartPage extends Component<CartPageProps> {
  render() {
    const total = this.props.cart
      .map((cartItem) => cartItem.prices)
      .map((cartItemPrices) =>
        cartItemPrices.filter(
          (price) => price.currency.symbol === this.props.currentCurrency.symbol
        )
      )
      .flat()
      .map(
        (currency, index) => currency.amount * this.props.cart[index].quantity
      )
      .reduce((accmulator, currentValue) => {
        return accmulator + currentValue;
      }, 0);

    const tax = 0.025 * total;

    return (
      <div>
        <CartTemplate
          cart={this.props.cart}
          cartTotalAmount={total}
          tax={tax}
        />
      </div>
    );
  }
}
function mapStateToProps(state: RootState) {
  return {
    cart: state.cart.cart,
    currentCurrency: state.currencies.currentCurrency,
  };
}
export default connect(mapStateToProps)(CartPage);
