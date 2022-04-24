import { Component } from "react";
import AppButton from "../../atoms/app-button/AppButton";
import "./Sizes.scss";

export default class Sizes extends Component {
  render() {
    let sizes = ["XS", "S", "M", "L"];
    return (
      <div id="sizes">
        <p>SIZE:</p>
        <div className="size-boxes">
          {sizes.map((size, index) => (
            <div key={index} className="size-btn">
              <AppButton variant="secondary">{size}</AppButton>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
