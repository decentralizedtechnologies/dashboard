interface IRouteChild {
  [key: string]: string;
}

interface IRoute {
  [key: string]: IRouteChild;
  BAR: IRouteChild;
}

const routes: IRoute = {
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

export const BARNewAssetRoute = route("BAR", "newAsset");
export const BARAssetDetailsRoute = route("BAR", "assetDetails");
export const BARAssetLookupRoute = route("BAR", "assetLookup");

export default routes;
