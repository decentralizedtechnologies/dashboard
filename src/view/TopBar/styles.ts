import { Theme } from "@material-ui/core";
import coreStyles, { topbarHeight } from "lib/core/styles";
import { fontWeight } from "lib/material-ui/typography";

export default (theme: Theme) => ({
  ...coreStyles(theme),
  topbar: {
    backgroundColor: "#06f",
    minHeight: topbarHeight,
  },
  link: {
    fontWeight: fontWeight.bold,
    color: "white",
  },
  linkContent: {
    color: "white",
  },
});
