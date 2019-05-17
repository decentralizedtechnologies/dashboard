import { Card, CardActions, CardContent, Grid, withStyles } from "@material-ui/core";
import classnames from "classnames";
import Button from "component/Button";
import Typography from "component/Typography";
import React, { Component } from "react";
import styles from "./styles";

export interface IEthereumCardProps {
  classes?: any;
  mainActionText?: string;
  onMainAction: () => void;
}

class EthereumCard extends Component<IEthereumCardProps> {
  public render() {
    const {
      classes,
      onMainAction,
      mainActionText = "Publish to Ethereum",
    } = this.props;
    return (
      <Card>
        <CardContent>
          <Grid container className={classnames(classes.marginBottomSm)}>
            <Grid item xs={1}>
              <img src="/svg/ethereum/icon.svg" className={classnames(classes.imgFluid)} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="h5" component="h5" content="Ethereum" />
            </Grid>
          </Grid>
          <Typography
            gutterBottom
            component="p"
            content="Store the data in a Solidity smart contract."
          />
        </CardContent>
        <CardActions disableActionSpacing>
          <Grid container spacing={8}>
            <Grid item>
              <Button size="small" content="Learn More" />
            </Grid>
            <Grid item>
              <Button
                onClick={onMainAction}
                content={mainActionText}
                size="small"
                variant="contained"
                color="primary"
              />
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(EthereumCard);
