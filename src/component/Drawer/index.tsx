import { Drawer as MUIDrawer, withStyles } from "@material-ui/core";
import { DrawerProps } from "@material-ui/core/Drawer";
import React, { Component } from "react";
import styles from "./styles";

export interface IDrawerProps extends DrawerProps {
  classes?: any;
}

class Drawer extends Component<IDrawerProps> {
  public render() {
    const {
      children,
      ...rest
    } = this.props;
    return (
      <MUIDrawer {...rest}>
        {children}
      </MUIDrawer>
    );
  }
}

export default withStyles(styles)(Drawer);
