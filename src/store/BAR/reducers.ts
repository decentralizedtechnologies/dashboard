import { AnyAction } from "redux";
import { BAR_ADD_FIELD_ROW, BAR_REMOVE_FIELD_ROW, BAR_TOGGLE_OUTPUT_VIEW, BAR_TOGGLE_PUBLISH_VIEW, BAR_UPDATE_FIELD_ROW } from "./constants";
import initial from "./initial";

export default (state: any = initial, action: AnyAction): any => {
  switch (action.type) {
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
