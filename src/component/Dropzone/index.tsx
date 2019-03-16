import { withStyles } from "@material-ui/core";
import classnames from "classnames";
import DropzoneJS, { DropzoneFile } from "dropzone";
import "dropzone/dist/basic.css";
import "dropzone/dist/dropzone.css";
import React, { Component } from "react";
import styles from "./styles";

export interface IDropzoneProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: any;
  onAddFile: (file: DropzoneFile) => void;
}

class Dropzone extends Component<IDropzoneProps> {
  public componentDidMount = () => {
    const {
      onAddFile,
      ...rest
    } = this.props;
    DropzoneJS.autoDiscover = false;
    const dropzone = new DropzoneJS("#dropzone", {
      url: "/",
      autoProcessQueue: false,
      previewsContainer: "#dropzone-preview",
    });

    dropzone.on("addedfile", (file: DropzoneFile) => onAddFile(file));
  }

  public render() {
    const {
      classes,
      onAddFile,
      ...rest
    } = this.props;
    return (
      <section
        id="dropzone"
        className={classnames("dropzone", classes.root)}
        {...rest}
      >
      </section>
    );
  }
}

export default withStyles(styles)(Dropzone);
