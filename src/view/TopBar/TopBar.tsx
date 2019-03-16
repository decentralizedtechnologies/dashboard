import { Grid, Link, withStyles } from "@material-ui/core";
import classnames from "classnames";
import AppBar from "component/AppBar";
import Typography from "component/Typography";
import React, { Component } from "react";
import styles from "./styles";

export interface ITopBarProps {
  classes?: any;
}

class TopBar extends Component<ITopBarProps> {
  public render() {
    const {
      classes,
    } = this.props;
    return (
      <AppBar
        elevation={0}
        position="fixed"
        className={classnames(classes.clippedHeader)}
        toolBarClassName={classnames(classes.topbar)}>
        <Grid container justify="flex-end">
          <Grid item>
            <Typography inline variant="caption" content="[Ad] " />
            <Typography inline>
              <Link href={"#"} className={classnames(classes.link)}>
                DocumentQuery.com
                <Typography
                  className={classnames(classes.linkContent)}
                  inline
                  component="span"
                  content="&nbsp; - Search content in printed documents, PDFs, images, and more..." />
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopBar);
