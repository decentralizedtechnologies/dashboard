import { makeAssetOutput } from "./actions";
import IStore from "./IStore";

const files = {
  key: "files",
  value: [],
  type: "array",
};
export default {
  isOutputOnDisplay: false,
  isPublishOnDisplay: false,
  dropzoneFiles: [],
  files,
  assetReference: "",
  versions: [],
  ...makeAssetOutput([{
    key: "",
    value: "",
    type: "text",
  }], files),
} as IStore;
