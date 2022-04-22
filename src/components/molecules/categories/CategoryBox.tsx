import { Component } from "react";
import "./CategoryBox.scss";

export default class CategoryBox extends Component {
  render() {
    return (
      <div id="categories">
        <button className="current">WOMEN</button>
        <button>MEN</button>
        <button>KIDS</button>
      </div>
    );
  }
}
