import { Component } from "react";
import "./Colors.scss";

export default class Colors extends Component {
  render() {
    let colors = ["grey", "black", "darkgreen"];
    let active = false;

    return (
      <div id="colors">
        <p>COLOR:</p>
        <div className="color-boxes">
          {colors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: `${color}` }}
              className={`color-box color-box-${index}
            ${active ? "current" : ""}


`}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}
