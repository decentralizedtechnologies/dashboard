import { Typography as MUITypography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { ITypographyProps } from "..";
import styles from "./styles";

class PageTitle extends Component<ITypographyProps> {
  public render() {
    const {
      children,
      content,
      ...rest
    } = this.props;
    return (
      <MUITypography {...rest} variant="h1">
        {content || children}
      </MUITypography>
    );
  }
}

export default withStyles(styles)(PageTitle);
