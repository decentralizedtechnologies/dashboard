import { withStyles } from "@material-ui/core";
import classnames from "classnames";
import React, { Component } from "react";
import styles from "./styles";

export interface IContainerProps {
  classes?: any;
  y?: number;
  x?: number;
}

class Container extends Component<IContainerProps> {
  public render() {
    const {
      children,
      classes,
      x = 0,
      y = 0,
      ...rest
    } = this.props;
    return (
      <div {...rest}
        className={classnames(classes[`paddingY${y}`], classes[`paddingX${x}`])}>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(Container);
