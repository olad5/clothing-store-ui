import { Component } from "react";
import { AppButtonProps } from "./AppButton.d";

// Styles
import "./AppButton.scss";

// ${this.props.variant === "secondary" ? "secondary" : ""}
export default class AppButton extends Component<AppButtonProps> {
  render() {
    return (
      <button
        id="app-button"
        style={{ fontSize: `${this.props.fontSize}` }}
        className={`
            ${this.props.variant}
            ${this.props.children === "S" ? "current-size" : ""}
                      `}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
