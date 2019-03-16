import { Theme } from "@material-ui/core";

export const topbarHeight = 28;
export const sidebarWidth = 240;

export default (theme: Theme) => ({
  toolbarHeight: theme.mixins.toolbar,
  topbarHeight: {
    marginBottom: topbarHeight,
  },
  clippedHeader: {
    zIndex: theme.zIndex.drawer + 1,
  },
  textRight: {
    textAlign: "right" as "right",
  },
  textCenter: {
    textAlign: "center" as "center",
  },
  imgFluid: {
    width: "100%",
    height: "auto",
  },
  onHover: {
    "&:hover": {
      cursor: "pointer",
    }
  },
  marginBottomSm: {
    marginBottom: theme.spacing.unit * 2,
  },
  marginBottomXs: {
    marginBottom: theme.spacing.unit,
  },
});
