import { Theme } from "@material-ui/core";
import coreStyles, { topbarHeight } from "lib/core/styles";
import { Breakpoints } from "lib/core/styles/mediaQueries";

export default (theme: Theme) => ({
  ...coreStyles(theme),
  logo: {
    height: "auto",
    width: 140,
  },
  header: {
    backgroundColor: "white",
    top: topbarHeight,
    [theme.breakpoints.down(Breakpoints.sm)]: {
      top: 0,
    }
  },
});
