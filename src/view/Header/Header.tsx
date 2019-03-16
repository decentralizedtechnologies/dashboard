import { Grid, withStyles } from "@material-ui/core";
import classnames from "classnames";
import AppBar from "component/AppBar";
import React, { Component } from "react";
import styles from "./styles";

export interface IHeaderProps {
  classes?: any;
}

class Header extends Component<IHeaderProps> {
  public render() {
    const {
      classes,
    } = this.props;
    return (
      <AppBar
        position="fixed"
        className={classnames(classes.header, classes.clippedHeader)}>
        <Grid container>
          <Grid item>
            <img src="/svg/logo-dt-black.svg" className={classnames(classes.logo)} />
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
