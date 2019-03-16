import { Theme } from "@material-ui/core";
import coreStyles from "lib/core/styles";

export default (theme: Theme) => ({
  ...coreStyles(theme),
  root: {
    "flexWrap": "wrap" as "wrap",
    "display": "flex" as "flex",
    "& .dz-image-preview": {
      position: "relative" as "relative",
      flexBasis: `100%`,
    },
    "& .dz-file-preview": {
      position: "relative" as "relative",
      flexBasis: `100%`,
    },
    "& .dz-image": {
      display: "none" as "none",
    },
    "& .dz-image img": {
      borderRadius: 3,
      width: "100%",
    },
    "& .dz-details": {
      fontSize: theme.typography.caption.fontSize,
      backgroundColor: theme.palette.grey[100],
      fontFamily: theme.typography.fontFamily,
      padding: theme.spacing.unit,
    },
    "& .dz-success-mark": {
      display: "none" as "none",
    },
    "& .dz-error-mark": {
      display: "none" as "none",
    },
  },
});
