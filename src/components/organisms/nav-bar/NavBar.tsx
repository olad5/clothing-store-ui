import { Component } from "react";

// Components
import CategoryBox from "../../molecules/categories/CategoryBox";
import AppLogo from "../../../assets/icons/app-logo-icon.svg";
import Actions from "../../molecules/actions/Actions";

// Styles
import "./NavBar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div id="nav-bar">
        <div className="categories">
          <CategoryBox />
        </div>
        <img className="app-logo" src={AppLogo} alt="App logo" />
        <div className="nav-actions">
          <Actions />
        </div>
      </div>
    );
  }
}
