import { Theme } from "@material-ui/core";
import coreStyles from "lib/core/styles";

export default (theme: Theme) => ({
  ...coreStyles(theme),
  root: {
    flexWrap: "wrap" as "wrap",
    display: "flex" as "flex",
    "& .dz-image-preview": {
      position: "relative" as "relative",
      flexBasis: `${(1 / 3) * 100}%`,
    },
    "& .dz-image img": {
      borderRadius: 3,
      width: "100%",
    },
    "& .dz-details": {
      backgroundColor: `rgba(255, 255, 255, 0.5)`,
      position: "absolute" as "absolute",
      padding: theme.spacing.unit,
      width: "100%",
      bottom: 0,
      right: 0,
      left: 0,
    },
    "& .dz-success-mark": {
      display: "none" as "none",
    },
    "& .dz-error-mark": {
      display: "none" as "none",
    },
  },
});
