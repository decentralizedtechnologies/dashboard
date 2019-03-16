import { Card, CardActions, CardContent, Grid, withStyles } from "@material-ui/core";
import classnames from "classnames";
import AppContainer from "component/AppContainer";
import Button from "component/Button";
import Container from "component/Container";
import Dropzone from "component/Dropzone";
import DropzonePreview from "component/Dropzone/DropzonePreview";
import Paper from "component/Paper";
import Typography from "component/Typography";
import PageTitle from "component/Typography/PageTitle";
import { DropzoneFile } from "dropzone";
import hljs from "highlight.js/lib/highlight";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/dracula.css";
import map from "lodash/map";
import React, { Component } from "react";
import { IFieldRow } from "store/BAR/IStore";
import FieldRow from "view/FieldRow";
import Header from "view/Header/Header";
import Sidenav from "view/Sidenav/Sidenav";
import TopBar from "view/TopBar/TopBar";
import styles from "./styles";

export interface INewAssetProps {
  classes?: any;
  fieldRows: IFieldRow[];
  assetOutput: string;
  schemaOutput: string;
  isOutputOnDisplay: boolean;
  isPublishOnDisplay: boolean;
  toggleOutputView: () => void;
  togglePublishView: () => void;
  addFileToAssetOutput: (file: DropzoneFile) => void;
}

class NewAsset extends Component<INewAssetProps> {
  public componentDidUpdate = () => {
    const {
      isOutputOnDisplay,
    } = this.props;
    if (isOutputOnDisplay) {
      hljs.registerLanguage('json', json);
      document.querySelectorAll('pre.code code').forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  }

  public getView() {
    const {
      isOutputOnDisplay,
      isPublishOnDisplay,
      fieldRows,
      assetOutput,
      schemaOutput,
      toggleOutputView,
      togglePublishView,
      addFileToAssetOutput,
      classes,
    } = this.props;

    if (isOutputOnDisplay) {
      return (
        <Paper>
          <Container x={2} y={2}>
            <Grid container justify="flex-end" spacing={16}>
              <Grid item>
                <Button
                  onClick={toggleOutputView}
                  content="Back"
                  color="primary"
                  variant="outlined" />
              </Grid>
              <Grid item>
                <Button
                  onClick={togglePublishView}
                  content="Save to blockchain"
                  color="primary"
                  variant="contained" />
              </Grid>
            </Grid>
          </Container>
          <Container x={2} y={2}>
            <Grid container spacing={16}>
              <Grid item lg={6}>
                <pre id="schema-output" className="code"><code>{schemaOutput}</code></pre>
              </Grid>
              <Grid item lg={6}>
                <pre id="data-output" className="code"><code>{assetOutput}</code></pre>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      );
    } else if (isPublishOnDisplay) {
      return (
        <Paper>
          <Container x={2} y={2}>
            <Grid container justify="flex-end" spacing={16}>
              <Grid item>
                <Button
                  onClick={toggleOutputView}
                  content="Back"
                  color="primary"
                  variant="outlined" />
              </Grid>
            </Grid>
          </Container>
          <Container x={2} y={2}>
            <Grid container spacing={16}>
              <Grid item lg={4}>
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
                    <Typography component="p" content="Store the data in a Solidity smart contract" />
                  </CardContent>
                  <CardActions disableActionSpacing>
                    <Grid container spacing={8}>
                      <Grid item>
                        <Button size="small" content="Learn More" />
                      </Grid>
                      <Grid item>
                        <Button
                          content="Publish to Ethereum"
                          size="small"
                          variant="contained"
                          color="primary"
                        />
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      );
    }
    return (
      <Paper>
        <Container x={2} y={2}>
          <Grid container justify="flex-end">
            <Grid item>
              <Button
                onClick={toggleOutputView}
                content="See output"
                color="primary"
                variant="contained" />
            </Grid>
          </Grid>
        </Container>
        <Container x={2} y={2}>
          <Grid container spacing={16}>
            <Grid item lg={4}>
              <DropzonePreview />
            </Grid>
            <Grid item lg={8}>
              <Dropzone onAddFile={addFileToAssetOutput} />
            </Grid>
          </Grid>
        </Container>
        {map(fieldRows, (field: IFieldRow, index: number) => (
          <FieldRow key={index} index={index} field={field} />
        ))}
      </Paper>
    );
  }

  public render() {
    return (
      <AppContainer>
        <TopBar />
        <Header />
        <Sidenav />
        <PageTitle content="New Asset" />
        {this.getView()}
      </AppContainer>
    );
  }
}

export default withStyles(styles)(NewAsset);
