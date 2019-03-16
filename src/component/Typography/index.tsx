import { Typography as MUITypography, withStyles } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import React, { Component } from "react";
import styles from "./styles";

export interface ITypographyProps extends TypographyProps {
  classes?: any;
  content?: string;
}

class Typography extends Component<ITypographyProps> {
  public render() {
    const {
      children,
      content,
      ...rest
    } = this.props;
    return (
      <MUITypography {...rest}>
        {content || children}
      </MUITypography>
    );
  }
}

export default withStyles(styles)(Typography);
