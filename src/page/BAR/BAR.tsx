import { withStyles } from "@material-ui/core";
import AppContainer from "component/AppContainer";
import React, { Component } from "react";
import Header from "view/Header/Header";
import Sidenav from "view/Sidenav/Sidenav";
import TopBar from "view/TopBar/TopBar";
import styles from "./styles";

export interface IBARProps {
  classes?: any;
}

class BAR extends Component<IBARProps> {
  public render() {
    return (
      <AppContainer>
        <TopBar />
        <Header />
        <Sidenav />
      </AppContainer>
    );
  }
}

export default withStyles(styles)(BAR);
