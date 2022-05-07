import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { actionCreators } from "../../../state";
import { CurrencyAction } from "../../../state/actions/currencies";
import { RootState } from "../../../state/reducers";
import { Currency } from "../../../types/Currency";
import { CurrencySwitcherProps } from "./CurrencySwitcher.d";

// Styles
import "./CurrencySwitcher.scss";

class CurrencySwitcher extends Component<CurrencySwitcherProps> {
  handleClick(e: React.MouseEvent<HTMLElement>, currency: Currency) {
    if (!(this.props.currentCurrency === currency)) {
      this.props.changeCurrentCurrency(currency);
      return;
    }
    return;
  }

  render() {
    let currencies = this.props.currencies;

    return (
      <div id="currency-switcher">
        {currencies.map((currency, index) => (
          <div
            key={index}
            className="currency"
            onClick={(e) => this.handleClick(e, currency)}
          >
            <p className="symbol">{currency.symbol}</p>
            <p className="label">{currency.label}</p>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    currentCurrency: state.currencies.currentCurrency,
    currencies: state.currencies.currencies,
  };
}

function mapDispatchToProps(dispatch: Dispatch<CurrencyAction>) {
  const { changeCurrentCurrency } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return {
    changeCurrentCurrency: (currency: Currency) =>
      changeCurrentCurrency(currency),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);
