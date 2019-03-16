import { Paper as MUIPaper, withStyles } from "@material-ui/core";
import { PaperProps } from "@material-ui/core/Paper";
import React, { Component } from "react";
import styles from "./styles";

export interface IPaperProps extends PaperProps {
  classes?: any;
}

class Paper extends Component<IPaperProps> {
  public render() {
    const {
      className,
      children,
      ...rest
    } = this.props;
    return (
      <MUIPaper {...rest}>
        {children}
      </MUIPaper>
    );
  }
}

export default withStyles(styles)(Paper);
