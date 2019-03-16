import { Theme } from "@material-ui/core";

const sizes = Array.from(Array(8).keys());
const paddingXY = (theme: Theme) => {
  const padding = {} as any;
  sizes.forEach((size: number) => {
    padding[`paddingX${size}`] = {
      paddingRight: theme.spacing.unit * size,
      paddingLeft: theme.spacing.unit * size,
    };
    padding[`paddingY${size}`] = {
      paddingBottom: theme.spacing.unit * size,
      paddingTop: theme.spacing.unit * size,
    };
  });
  return padding;
};

export default (theme: Theme) => ({
  ...paddingXY(theme),
});
