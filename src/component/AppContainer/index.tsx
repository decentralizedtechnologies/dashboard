import { withStyles } from "@material-ui/core";
import classnames from "classnames";
import React, { Component } from "react";
import styles from "./styles";

export interface IAppContainerProps {
  classes?: any;
}

class AppContainer extends Component<IAppContainerProps> {
  public render() {
    const {
      children,
      classes,
    } = this.props;
    return (
      <main role="main" id="app-container" className={classnames(classes.appContainer)}>
        <section id="container" className={classnames(classes.container)}>
          <div className={classnames(classes.toolbarHeight)}></div>
          {children}
        </section>
      </main>
    );
  }
}

export default withStyles(styles)(AppContainer);
