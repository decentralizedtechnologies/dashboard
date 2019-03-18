import { AnyAction } from "redux";
import { BAR_ADD_DROPZONE_FILE, BAR_ADD_FIELD_ROW, BAR_ADD_IPFS_FILE, BAR_REMOVE_DROPZONE_FILE, BAR_REMOVE_FIELD_ROW, BAR_SET_ASSET_REFERENCE, BAR_SET_ASSET_VERSIONS, BAR_TOGGLE_OUTPUT_VIEW, BAR_TOGGLE_PUBLISH_VIEW, BAR_UPDATE_FIELD_ROW } from "./constants";
import initial from "./initial";

export default (state: any = initial, action: AnyAction): any => {
  switch (action.type) {
    case BAR_SET_ASSET_VERSIONS:
      return {
        ...state,
        ...action.payload,
      };
    case BAR_SET_ASSET_REFERENCE:
      return {
        ...state,
        ...action.payload,
      };
    case BAR_ADD_DROPZONE_FILE:
      return {
        ...state,
        ...action.payload,
      };
    case BAR_REMOVE_DROPZONE_FILE:
      return {
        ...state,
        ...action.payload,
      };
    case BAR_ADD_IPFS_FILE:
      return {
        ...state,
        ...action.payload,
      };
    case BAR_ADD_FIELD_ROW:
      return {
        ...state,
        ...action.payload,
      };
    case BAR_UPDATE_FIELD_ROW:
      return {
        ...state,
        ...action.payload,
      };
    case BAR_REMOVE_FIELD_ROW:
      return {
        ...state,
        ...action.payload,
      };
    case BAR_TOGGLE_OUTPUT_VIEW:
      return {
        ...state,
        ...action.payload,
      };
    case BAR_TOGGLE_PUBLISH_VIEW:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
