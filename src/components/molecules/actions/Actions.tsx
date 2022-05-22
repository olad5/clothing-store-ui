import { Component, createRef } from "react";
import { connect } from "react-redux";

import CartIcon from "../../../assets/icons/empty-cart-icon.svg";
import { RootState } from "../../../state/reducers";
import { ActionsProps } from "./Actions.d";
import { withRouter } from "../../../with-router/withRouter";

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
  cartOverlayRef = createRef<HTMLDivElement>();
  cartOverlayIconRef = createRef<HTMLButtonElement>();

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

  handleViewCartBtnClick() {
    this.setState({
      cartOverlayActive: false,
    });

    if (!this.props.location.pathname.includes("/cart")) {
      this.props.navigate("/cart");
    }
  }

  handleClickOutside(event: MouseEvent) {
    if (
      this.wrapperRef &&
      this.state.currencySwitcherActive &&
      !this.wrapperRef.current?.contains(event.target as Node)
    ) {
      return this.setState({
        currencySwitcherActive: false,
      });
    }

    if (
      this.cartOverlayRef &&
      this.state.cartOverlayActive &&
      !this.cartOverlayRef.current?.contains(event.target as Node) &&
      !this.cartOverlayIconRef.current?.contains(event.target as Node)
    ) {
      return this.setState({
        cartOverlayActive: false,
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
          ref={this.cartOverlayIconRef}
          className="cart-overlay-icon"
          onClick={(e) => this.handleCartOverlayBtnClick(e, cartOverlayActive)}
        >
          <div className="cart-items-count">{this.props.cart.length}</div>
          <img src={CartIcon} alt=" cart icon" />
        </button>
        <div
          className={`${cartOverlayActive ? "active" : ""}
              cart-overlay
              `}
          ref={this.cartOverlayRef}
        >
          {cartOverlayActive ? (
            <CartOverLay
              handleViewCartBtnClick={() => this.handleViewCartBtnClick()}
            />
          ) : null}
        </div>
        {cartOverlayActive && <div className="hover-filter"></div>}
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
export default withRouter(connect(mapStateToProps)(Actions));
