import { Grid, ListItemText as MUIListItemText, withStyles } from "@material-ui/core";
import { ListItemTextProps } from "@material-ui/core/ListItemText";
import React, { Component } from "react";
import styles from "./styles";

export interface IListItemTextProps extends ListItemTextProps {
  classes?: any;
  content?: string;
  icon?: any;
}

class ListItemText extends Component<IListItemTextProps> {
  public render() {
    const {
      children,
      content,
      icon,
      ...rest
    } = this.props;
    if (icon) {
      return (
        <MUIListItemText {...rest}>
          <Grid container alignItems="center">
            <Grid item>
              {icon}
            </Grid>
            <Grid item>
              {content || children}
            </Grid>
          </Grid>
        </MUIListItemText>
      );
    }

    return (
      <MUIListItemText {...rest}>
        {content || children}
      </MUIListItemText>
    );
  }
}

export default withStyles(styles)(ListItemText);
