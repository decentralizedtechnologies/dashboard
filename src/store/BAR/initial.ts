import { makeAssetOutput } from "./actions";
import IStore from "./IStore";

export default {
  isOutputOnDisplay: false,
  isPublishOnDisplay: false,
  ...makeAssetOutput([{
    key: "",
    value: "",
    type: "text",
  }]),
} as IStore;
