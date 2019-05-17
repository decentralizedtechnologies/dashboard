
interface IRouteChild {
  [key: string]: string;
}

interface IRoute {
  [key: string]: IRouteChild;
  BAR: IRouteChild;
}

const routes = {
  BAR: {
    root: "/BAR",
    newAsset: "/new-asset",
    assetDetails: "/asset-details",
    assetLookup: "/asset-lookup",
  },
};

export const route = (root: string, child: string): string => {
  return `${routes[root].root}${routes[root][child]}`;
};

export const BARNewAssetRoute = "/new-asset";
export const BARAssetDetailsRoute = "/asset-details";
export const BARAssetLookupRoute = "/asset-lookup";

export default routes;
