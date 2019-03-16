import { Theme } from "@material-ui/core";
import coreStyles, { topbarHeight } from "lib/core/styles";

export default (theme: Theme) => ({
  ...coreStyles(theme),
  logo: {
    height: "auto",
    width: 140,
  },
  header: {
    backgroundColor: "white",
    top: topbarHeight,
  },
});
