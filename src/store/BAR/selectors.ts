import property from "lodash/property";
import { NAMESPACE } from "./constants";
import { IFieldRow } from "./IStore";

export const fieldRowsProp: (obj: any) => IFieldRow[] = property(`${NAMESPACE}.fieldRows`);
export const assetOutputProp: (obj: any) => string = property(`${NAMESPACE}.assetOutput`);
export const schemaOutputProp: (obj: any) => string = property(`${NAMESPACE}.schemaOutput`);
export const isOutputOnDisplayProp: (obj: any) => boolean = property(`${NAMESPACE}.isOutputOnDisplay`);
export const isPublishOnDisplayProp: (obj: any) => boolean = property(`${NAMESPACE}.isPublishOnDisplay`);
