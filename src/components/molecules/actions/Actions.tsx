import { Component, createRef } from "react";
import { connect } from "react-redux";

import EmptyCartIcon from "../../../assets/icons/empty-cart-icon.svg";
import { RootState } from "../../../state/reducers";
import { ActionsProps } from "./Actions.d";

// Components
import CartOverLay from "../../organisms/cart-overlay/CartOverLay";
import CurrencySwitcher from "../../organisms/currency-switcher/CurrencySwitcher";

// Styles
import "./Actions.scss";

class Actions extends Component<ActionsProps> {
  state = {
    currencySwitcherActive: false,
    cartOverlayActive: false,
  };

  wrapperRef = createRef<HTMLButtonElement>();

  handleCurrencySwitcherClick(
    e: React.MouseEvent<HTMLButtonElement>,
    currencySwitcherActive: boolean
  ) {
    if (!currencySwitcherActive) {
      this.setState({
        currencySwitcherActive: true,
      });
      return;
    }
    this.setState({
      currencySwitcherActive: false,
    });
  }

  handleCartOverlayBtnClick(
    e: React.MouseEvent<HTMLButtonElement>,

    cartOverlayActive: boolean
  ) {
    if (!cartOverlayActive) {
      this.setState({
        cartOverlayActive: true,
      });
      return;
    }
    this.setState({
      cartOverlayActive: false,
    });
  }
  handleClickOutside(event: MouseEvent) {
    if (
      this.wrapperRef &&
      this.state.currencySwitcherActive &&
      !this.wrapperRef.current?.contains(event.target as Node)
    ) {
      this.setState({
        currencySwitcherActive: false,
      });
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", (e) => this.handleClickOutside(e));
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", (e) =>
      this.handleClickOutside(e)
    );
  }

  render() {
    const { currencySwitcherActive, cartOverlayActive } = this.state;

    return (
      <div id="actions">
        <button
          className="currency-switcher"
          ref={this.wrapperRef}
          onClick={(e) =>
            this.handleCurrencySwitcherClick(e, currencySwitcherActive)
          }
        >
          <div className="currency-switcher-text">
            <p className="currency">{this.props.currentCurrency.symbol}</p>
            <p
              className={`${
                currencySwitcherActive ? "arrow-active" : ""
              }   arrow `}
            >
              ^
            </p>
          </div>
          <div
            className={`${
              currencySwitcherActive ? "active" : ""
            }   currency-switcher-overlay `}
          >
            {currencySwitcherActive ? <CurrencySwitcher /> : null}
          </div>
        </button>
        <button
          className="cart-overlay-icon"
          onClick={(e) => this.handleCartOverlayBtnClick(e, cartOverlayActive)}
        >
          <div className="cart-items-count">{this.props.cart.length}</div>
          <img src={EmptyCartIcon} alt=" cart icon" />
          <div
            className={`${
              cartOverlayActive ? "active" : ""
            }   currency-switcher-overlay `}
          >
            {cartOverlayActive ? <CartOverLay /> : null}
          </div>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    currentCurrency: state.currencies.currentCurrency,
    cart: state.cart.cart,
  };
}
export default connect(mapStateToProps)(Actions);
