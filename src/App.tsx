import { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// components
import Navbar from "./components/organisms/nav-bar/NavBar";
import ProductsPage from "./pages/products-page/ProductsPage";
import CartPage from "./pages/cart-page/CartPage";
import ProductDescriptionPage from "./pages/product-description-page/ProductDescriptionPage";

// Styles
import "./assets/styles/main.scss";

class App extends Component {
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

export default App;
