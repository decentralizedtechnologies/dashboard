import { AppBar, FormControl, Grid, Hidden, Input, InputLabel, MenuItem, Select, Tab, Tabs, withStyles } from "@material-ui/core";
import AppContainer from "component/AppContainer";
import Button from "component/Button";
import Container from "component/Container";
import Paper from "component/Paper";
import Typography from "component/Typography";
import PageTitle from "component/Typography/PageTitle";
import "highlight.js/styles/dracula.css";
import { Location } from "history";
import map from "lodash/map";
import qs from "qs";
import React, { Component } from "react";
import { IAssetData, IFieldRow, IFile } from "store/BAR/IStore";
import Header from "view/Header/Header";
import Sidenav from "view/Sidenav/Sidenav";
import TopBar from "view/TopBar/TopBar";
import styles from "./styles";

export interface IAssetLookupProps {
  classes?: any;
  assetReference: string;
  versions: IAssetData[];
  location: Location;
  setAssetReference: (assetReference: string) => void;
  getAssetDetails: () => void;
}

class AssetLookup extends Component<IAssetLookupProps> {
  public componentWillMount = () => {
    this.getQueryParams();
  }

  public getQueryParams = () => {
    const {
      setAssetReference,
      location,
    } = this.props;

    const {
      assetReference,
      blockchain,
      network
    } = qs.parse(location.search, { ignoreQueryPrefix: true });

    if (assetReference) {
      setAssetReference(assetReference);
    }
  }

  public componentDidMount = () => {
    const {
      getAssetDetails,
    } = this.props;
    getAssetDetails();
  }

  public render() {
    const {
      assetReference,
      setAssetReference,
      getAssetDetails,
      versions,
    } = this.props;
    return (
      <AppContainer>
        <Hidden smDown>
          <TopBar />
        </Hidden>
        <Header />
        <Sidenav />
        <Container yBottom={3}>
          <Grid container justify="space-between">
            <Grid item lg={6}>
              <PageTitle content="Asset Lookup" />
            </Grid>
            <Grid item lg={3}>
              <FormControl fullWidth>
                <Select value="ethereum">
                  <MenuItem value="ethereum">Ethereum</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Container>
        <Paper>
          <Container x={2} yTop={3} yBottom={6}>
            <Grid container spacing={16}>
              <Grid item lg={9}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="search">Asset Reference</InputLabel>
                  <Input
                    onChange={(e) => setAssetReference(e.currentTarget.value)}
                    value={assetReference}
                    id="search"
                    autoFocus
                  />
                </FormControl>
              </Grid>
              <Grid item lg={3}>
                <Button
                  onClick={getAssetDetails}
                  content="Load"
                  fullWidth
                  variant="contained"
                  color="primary"
                />
              </Grid>
            </Grid>
          </Container>
          <AppBar position="static" color="default">
            <Tabs
              value={0}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              {map(versions, (version: IAssetData, index: number) => (
                <Tab label={`Asset Version ${index}`} key={index} />
              ))}
            </Tabs>
          </AppBar>
          {map(versions, (version: IAssetData, index: number) => (
            <Container x={3} y={3} key={index}>
              <Container yBottom={3}>
                <Grid container>
                  {map(version.Files.value as IFile[], (file: IFile, i: number) => (
                    <Grid item lg={4} key={i}>
                      <img
                        src={`https://ipfs.infura.io/ipfs/${file.hash}`}
                        width="100%"
                        height="auto"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Container>
              {map(version.Asset, (field: IFieldRow, i: number) => (
                <Container key={i} yBottom={3}>
                  <Typography content={field.key} variant="h5" />
                  <Typography content={field.value as string} variant="body1" />
                </Container>
              ))}
            </Container>
          ))}
        </Paper>
      </AppContainer>
    );
  }
}

export default withStyles(styles)(AssetLookup);
