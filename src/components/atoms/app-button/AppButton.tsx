import { Component } from "react";
import "./AppButton.scss";
import { AppButtonProps } from "./AppButton.d";

export default class AppButton extends Component<AppButtonProps> {
  render() {
    return (
      <button
        id="app-button"
        style={{ fontSize: `${this.props.fontSize}` }}
        className={`
            ${this.props.variant === "secondary" ? "secondary" : ""}
            ${this.props.children === "S" ? "current-size" : ""}
            ${
              this.props.children === "<" || this.props.children === ">"
                ? "tertiary"
                : ""
            }
            `}
      >
        {this.props.children}
      </button>
    );
  }
}
