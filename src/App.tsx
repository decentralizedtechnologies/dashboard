import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import themeConfig from "lib/material-ui/theme";
import NewAsset from "page/BAR/NewAsset";
import { BARNewAssetRoute } from "page/routes";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const theme = createMuiTheme(themeConfig);

class App extends Component {
  public render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Route path={BARNewAssetRoute} component={NewAsset} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
