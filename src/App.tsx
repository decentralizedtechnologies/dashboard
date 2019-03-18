import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import themeConfig from "lib/material-ui/theme";
import AssetDetails from "page/BAR/AssetDetails";
import AssetLookup from "page/BAR/AssetLookup";
import NewAsset from "page/BAR/NewAsset";
import { BARAssetDetailsRoute, BARAssetLookupRoute, BARNewAssetRoute } from "page/routes";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

const theme = createMuiTheme(themeConfig);

class App extends Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path={BARNewAssetRoute} component={NewAsset} />
          <Route path={BARAssetDetailsRoute} component={AssetDetails} />
          <Route path={BARAssetLookupRoute} component={AssetLookup} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
