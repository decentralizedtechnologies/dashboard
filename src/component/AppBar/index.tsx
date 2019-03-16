import { AppBar as MUIAppBar, Toolbar as MUIToolbar, withStyles } from "@material-ui/core";
import { AppBarProps } from "@material-ui/core/AppBar";
import classnames from "classnames";
import React, { Component } from "react";
import styles from "./styles";

export interface IAppBarProps extends AppBarProps {
  classes?: any;
  toolBarClassName?: any;
}

class AppBar extends Component<IAppBarProps> {
  public render() {
    const {
      children,
      classes,
      className,
      toolBarClassName,
      ...rest
    } = this.props;
    return (
      <MUIAppBar
        {...rest}
        className={classnames(className)}>
        <MUIToolbar className={toolBarClassName}>
          {children}
        </MUIToolbar>
      </MUIAppBar>
    );
  }
}

export default withStyles(styles)(AppBar);
