import { Component } from "react";
import { connect } from "react-redux";
import CartTemplate from "../../components/templates/cart-template/CartTemplate";
import { RootState } from "../../state/reducers";
import { CartPageProps } from "./CartPage.d";
import { getTotalAmount } from "./CartPage.functions";

class CartPage extends Component<CartPageProps> {
  render() {
    const total = getTotalAmount(this.props.cart, this.props.currentCurrency);
    const tax = 0.025 * total;

    return (
      <div>
        <CartTemplate
          cart={this.props.cart}
          cartTotalAmount={total}
          tax={tax}
          currentCurrency={this.props.currentCurrency}
        />
      </div>
    );
  }
}
export function mapStateToProps(state: RootState) {
  return {
    cart: state.cart.cart,
    currentCurrency: state.currencies.currentCurrency,
  };
}
export default connect(mapStateToProps)(CartPage);
