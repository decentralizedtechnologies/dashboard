import { withStyles } from "@material-ui/core";
import AppContainer from "component/AppContainer";
import Paper from "component/Paper";
import PageTitle from "component/Typography/PageTitle";
import "highlight.js/styles/dracula.css";
import React, { Component } from "react";
import Header from "view/Header/Header";
import Sidenav from "view/Sidenav/Sidenav";
import TopBar from "view/TopBar/TopBar";
import styles from "./styles";

export interface IAssetDetailsProps {
  classes?: any;
}

class AssetDetails extends Component<IAssetDetailsProps> {
  public render() {
    return (
      <AppContainer>
        <TopBar />
        <Header />
        <Sidenav />
        <PageTitle content="Asset Details" />
        <Paper>

        </Paper>
      </AppContainer>
    );
  }
}

export default withStyles(styles)(AssetDetails);
