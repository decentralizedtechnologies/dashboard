import { Link as MUILink, withStyles } from "@material-ui/core";
import { LinkProps } from "@material-ui/core/Link";
import classnames from "classnames";
import React, { Component } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import styles from "./styles";

export interface IRouterLinkProps extends LinkProps {
  classes?: any;
  content?: string;
  to: string;
}

class RouterLink extends Component<IRouterLinkProps> {
  public render() {
    const {
      children,
      content,
      classes,
      to,
      ...rest
    } = this.props;

    const Link = () =>
      <ReactRouterLink
        className={classnames(classes.routerLink)}
        to={to}
      >
        {content}
      </ReactRouterLink>;

    return (
      <MUILink {...rest} component={Link}>
        &nbsp;
      </MUILink>
    );
  }
}

export default withStyles(styles)(RouterLink);
