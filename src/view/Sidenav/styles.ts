import { Theme } from "@material-ui/core";
import coreStyles from "lib/core/styles";
import palette from "lib/core/styles/palette";

export default (theme: Theme) => ({
  ...coreStyles(theme),
  paper: {
    backgroundColor: "transparent",
  },
  paperAnchorDockedLeft: {
    border: "none",
  },
  icon: {
    marginRight: theme.spacing.unit,
  },
  simpleicoIcon: {
    width: 24,
  },
  simpleico: {
    color: palette.simpleico.primary,
  },
  barIcon: {
    width: 28,
  },
  bar: {
    color: palette.bar.primary,
  },
});
