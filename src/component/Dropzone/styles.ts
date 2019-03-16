import { Theme } from "@material-ui/core";
import coreStyles from "lib/core/styles";

export default (theme: Theme) => ({
  ...coreStyles(theme),
  root: {
    borderColor: theme.palette.primary.light,
    fontFamily: theme.typography.fontFamily,
    borderRadius: 3,
    display: "flex" as "flex",
    flexDirection: "column" as "column",
    justifyContent: "center" as "center",
    "& .dz-message": {
      color: theme.palette.primary.main,
      margin: 0,
    },
  },
});
