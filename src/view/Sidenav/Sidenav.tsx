import { List, ListItem, withStyles } from "@material-ui/core";
import classnames from "classnames";
import Drawer from "component/Drawer";
import ListItemText from "component/Drawer/ListItemText";
import RouterLink from "component/RouterLink";
import Typography from "component/Typography";
import breakpoint from "lib/core/styles/mediaQueries";
import { BARAssetLookupRoute, BARNewAssetRoute } from "page/routes";
import React, { Component } from "react";
import styles from "./styles";

export interface ISidenavProps {
  classes?: any;
}

class Sidenav extends Component<ISidenavProps> {
  public render() {
    const {
      classes,
    } = this.props;

    return (
      <Drawer
        variant="persistent"
        open={breakpoint.up("sm")}
      >
        <div className={classnames(classes.toolbarHeight, classes.topbarHeight)} />
        {/* <List>
          <ListItem button>
            <ListItemText
              icon={<img
                src="/svg/icon-simpleico.svg"
                className={classnames(classes.simpleicoIcon, classes.icon)} />}
              disableTypography
            >
              <Typography
                inline
                content="Simple ICO"
                className={classnames(classes.simpleico)} />
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText
              secondary="New ERC20"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              secondary="Crowdsales Catalog"
            />
          </ListItem>
        </List> */}
        {/* <List>
          <ListItem button>
            <ListItemText
              icon={<img
                src="/svg/icon-simpleico.svg"
                className={classnames(classes.simpleicoIcon, classes.icon)} />}
              disableTypography
            >
              <Typography
                inline
                content="Simple Whitelist"
                className={classnames(classes.simpleico)} />
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText
              secondary="New MVT20"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              secondary="Crowdsales Catalog"
            />
          </ListItem>
        </List> */}
        <List>
          <ListItem button>
            <ListItemText
              icon={<img
                src="/svg/icon-bar.svg"
                className={classnames(classes.barIcon, classes.icon)} />}
              disableTypography
            >
              <Typography
                inline
                content="Asset Registry"
                className={classnames(classes.bar)} />
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText
              secondary={<RouterLink to={BARNewAssetRoute} content="New Asset" />}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              secondary={<RouterLink to={BARAssetLookupRoute} content="Asset Lookup" />}
            />
          </ListItem>
          {/* <ListItem button>
            <ListItemText
              secondary="Schemas"
            />
          </ListItem> */}
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidenav);
