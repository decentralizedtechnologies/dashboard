import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import themeConfig from "lib/material-ui/theme";
import AssetLookup from "page/BAR/AssetLookup";
import NewAsset from "page/BAR/NewAsset";
import { BARAssetLookupRoute, BARNewAssetRoute } from "page/routes";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

const theme = createMuiTheme(themeConfig);

class App extends Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact component={NewAsset} />
          <Route path={BARNewAssetRoute} component={NewAsset} />
          <Route path={BARAssetLookupRoute} component={AssetLookup} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
