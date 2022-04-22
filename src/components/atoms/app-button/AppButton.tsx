import { Component } from "react";
import "./AppButton.scss";
import { AppButtonProps } from "./AppButton.d";

export default class AppButton extends Component<AppButtonProps> {
  render() {
    return (
      <button
        id="app-button"
        className={`
            ${this.props.variant === "secondary" ? "secondary" : ""}
            `}
      >
        {this.props.children}
      </button>
    );
  }
}
