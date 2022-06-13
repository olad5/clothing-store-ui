import { Component } from "react";
import { AppButtonProps } from "./AppButton.d";

// Styles
import "./AppButton.scss";

export default class AppButton extends Component<AppButtonProps> {
  render() {
    return (
      <button
        id="app-button"
        className={`
            ${this.props.variant}
            ${this.props.children === "S" ? "current-size" : ""}
            ${this.props.disabled ? "disabled" : ""}
                      `}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
