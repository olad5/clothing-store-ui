import { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./state";
import { bindActionCreators, Dispatch } from "redux";
import { CurrencyAction } from "./state/actions/currencies";
import { AppProps } from "./App.d";

// components
import Navbar from "./components/organisms/nav-bar/NavBar";
import ProductsPage from "./pages/products-page/ProductsPage";
import CartPage from "./pages/cart-page/CartPage";
import ProductDescriptionPage from "./pages/product-description-page/ProductDescriptionPage";

// Styles
import "./assets/styles/main.scss";
import { CategoryAction } from "./state/actions/categories";

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.getCurrencies();
    this.props.getCategoryProducts("all");
  }

  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Navigate to="/products/" />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route
                path="/products/:id"
                element={<ProductDescriptionPage />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(
  dispatch: Dispatch<CurrencyAction | CategoryAction>
) {
  const { getCurrencies, getCategoryProducts } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return {
    getCurrencies: () => getCurrencies(),
    getCategoryProducts: (category: string) => getCategoryProducts(category),
  };
}

export default connect(null, mapDispatchToProps)(App);
