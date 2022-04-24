import { Component } from "react";
import "./ItemName.scss";

export default class ItemName extends Component {
  render() {
    return (
      <div id="item-name">
        <p className="name">Apollo</p>
        <p className="brand">Running Short</p>
      </div>
    );
  }
}
