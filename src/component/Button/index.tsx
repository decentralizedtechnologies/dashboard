import { Button as MUIButton, withStyles } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import React, { Component } from "react";
import styles from "./styles";

export interface IButtonProps extends ButtonProps {
  content?: string;
  classes?: any;
}

class Button extends Component<IButtonProps> {
  public render() {
    const {
      content,
      children,
      ...rest
    } = this.props;
    return (
      <MUIButton {...rest}>
        {content || children}
      </MUIButton>
    );
  }
}

export default withStyles(styles)(Button);
