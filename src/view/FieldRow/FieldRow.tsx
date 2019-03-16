import { FormControl, Grid, IconButton, Input, InputLabel, Menu, MenuItem, withStyles } from "@material-ui/core";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";
import classnames from "classnames";
import Container from "component/Container";
import React, { Component } from "react";
import { IFieldRow } from "store/BAR/IStore";
import styles from "./styles";

export interface IFieldRowProps {
  classes?: any;
  index: number;
  field: IFieldRow;
  addFieldRow: (type: string) => void;
  removeFieldRow: (index: number) => void;
  updateFieldRow: (index: number, key: string, value: string) => void;
}

export interface IFieldRowState {
  anchorEl?: any;
}

class FieldRow extends Component<IFieldRowProps, IFieldRowState> {

  public titleInput = React.createRef() as unknown;

  public state = {
    anchorEl: null,
  };

  public componentDidMount = () => {
    (this.titleInput as HTMLInputElement).focus();
  }

  public setAnchorEl = (el: any) => {
    this.setState({
      anchorEl: el,
    });
  }

  public handleClick = (event: any) => {
    this.setAnchorEl(event.currentTarget);
  }

  public handleClose = () => {
    const {
      addFieldRow,
    } = this.props;
    addFieldRow("text");
    this.setAnchorEl(null);
  }

  public onUpdateFieldRow = (evt: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const {
      index,
      updateFieldRow,
    } = this.props;
    updateFieldRow(index, key, evt.target.value);
  }

  public onRemoveFieldRow = () => {
    const {
      index,
      removeFieldRow,
    } = this.props;
    removeFieldRow(index);
  }

  public render() {
    const {
      anchorEl,
    } = this.state;
    const {
      classes,
      index,
      field,
    } = this.props;
    return (
      <Container x={2} y={3}>
        <Grid container spacing={16}>
          <Grid item lg={4}>
            <FormControl fullWidth>
              <InputLabel htmlFor={`title-${index}`}>Title</InputLabel>
              <Input
                id={`title-${index}`}
                inputRef={(input: HTMLInputElement) => this.titleInput = input}
                defaultValue={field.key}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onUpdateFieldRow(e, "key")} />
            </FormControl>
          </Grid>
          <Grid item lg={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor={`value-${index}`}>Value</InputLabel>
              <Input
                id={`value-${index}`}
                defaultValue={field.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onUpdateFieldRow(e, "value")} />
            </FormControl>
          </Grid>
          <Grid item lg={2} className={classnames(classes.textRight)}>
            {index > 0 &&
              <IconButton aria-label="Remove" onClick={this.onRemoveFieldRow}>
                <RemoveCircleOutline />
              </IconButton>
            }
            <IconButton aria-label="Add" onClick={this.handleClick}>
              <AddCircleOutline />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}>
              <MenuItem onClick={this.handleClose}>Text field</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(FieldRow);
