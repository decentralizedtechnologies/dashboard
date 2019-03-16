import { Theme } from "@material-ui/core";
import { fontWeight } from "lib/material-ui/typography";

export default (theme: Theme) => ({
  primary: {
    fontWeight: fontWeight.bold,
    color: "inherit",
  },
  secondary: {
    paddingLeft: theme.spacing.unit * 2,
    a: {
      color: theme.palette.secondary.main,
    },
  },
});
