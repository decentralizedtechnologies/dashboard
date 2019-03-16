import { withStyles } from "@material-ui/core";
import classnames from "classnames";
import "dropzone/dist/basic.css";
import "dropzone/dist/dropzone.css";
import React, { Component } from "react";
import styles from "./styles";

export interface IDropzonePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: any;
}

class DropzonePreview extends Component<IDropzonePreviewProps> {
  public render() {
    const {
      classes,
      ...rest
    } = this.props;
    return (
      <section
        id="dropzone-preview"
        className={classnames(classes.root)}
        {...rest}
      >
      </section>
    );
  }
}

export default withStyles(styles)(DropzonePreview);
