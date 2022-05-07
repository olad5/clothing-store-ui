import { Component, createRef } from "react";
import { connect } from "react-redux";

import EmptyCartIcon from "../../../assets/icons/empty-cart-icon.svg";
import { RootState } from "../../../state/reducers";
import { ActionsProps } from "./Actions.d";

// Components
import CurrencySwitcher from "../../organisms/currency-switcher/CurrencySwitcher";

// Styles
import "./Actions.scss";

class Actions extends Component<ActionsProps> {
  state = {
    currencySwitcherActive: false,
  };

  wrapperRef = createRef<HTMLDivElement>();

  handleClick(
    e: React.MouseEvent<HTMLDivElement>,
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
    const { currencySwitcherActive } = this.state;
    return (
      <div id="actions">
        <div
          className="currency-switcher"
          ref={this.wrapperRef}
          onClick={(e) => this.handleClick(e, currencySwitcherActive)}
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
        </div>
        <div className="cart-icon">
          <div className="cart-items-count">3</div>
          <img src={EmptyCartIcon} alt=" cart icon" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    currentCurrency: state.currencies.currentCurrency,
  };
}
export default connect(mapStateToProps)(Actions);
