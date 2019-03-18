import { withStyles } from "@material-ui/core";
import classnames from "classnames";
import React, { Component } from "react";
import styles from "./styles";

export interface IContainerProps {
  classes?: any;
  y?: number;
  yBottom?: number;
  yTop?: number;
  x?: number;
  xLeft?: number;
  xRight?: number;
}

class Container extends Component<IContainerProps> {
  public render() {
    const {
      children,
      classes,
      x = 0,
      y = 0,
      yBottom = 0,
      yTop = 0,
      xLeft = 0,
      xRight = 0,
      ...rest
    } = this.props;
    return (
      <div {...rest}
        className={
          classnames(classes[`paddingY${y}`],
            classes[`paddingX${x}`],
            classes[`paddingYTop${yTop}`],
            classes[`paddingYBottom${yBottom}`],
            classes[`paddingXLeft${xLeft}`],
            classes[`paddingXRight${xRight}`],
          )
        }
      >
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(Container);
