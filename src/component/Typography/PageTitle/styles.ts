import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  root: {
    fontSize: theme.typography.overline.fontSize,
    textTransform: "uppercase" as "uppercase",
    marginBottom: theme.spacing.unit * 3,
  },
});
