import { Theme } from "@material-ui/core";
import coreStyles, { sidebarWidth, topbarHeight } from "lib/core/styles";
import { Breakpoints } from "lib/core/styles/mediaQueries";

export default (theme: Theme) => ({
  ...coreStyles(theme),
  appContainer: {
    backgroundColor: "whitesmoke",
    minHeight: "100vh",
  },
  container: {
    paddingBottom: topbarHeight + theme.spacing.unit * 4,
    paddingLeft: sidebarWidth + theme.spacing.unit * 4,
    paddingTop: topbarHeight + theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    [theme.breakpoints.down(Breakpoints.sm)]: {
      paddingRight: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
    },
  },
});
