import { createMuiTheme } from "@material-ui/core/styles";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import themeConfig from "lib/material-ui/theme";

export enum Breakpoints {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

const theme = createMuiTheme(themeConfig);

const breakpoint = {
  between: (start: Breakpoint, end: Breakpoint) => {
    const bp = theme.breakpoints.between(start, end).replace("@media", "");
    return window.matchMedia(bp).matches;
  },
  down: (down: Breakpoint) => {
    const bp = theme.breakpoints.down(down).replace("@media", "");
    return window.matchMedia(bp).matches;
  },
  up: (up: Breakpoint) => {
    const bp = theme.breakpoints.up(up).replace("@media", "");
    return window.matchMedia(bp).matches;
  },
};

export default breakpoint;
