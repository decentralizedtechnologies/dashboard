import { DropzoneFile } from "dropzone";
import schemaGenerator from "generate-schema";
import compact from "lodash/compact";
import { createAction } from "redux-actions";
import IPFSService from "service/IpfsService";
import { BAR_ADD_FIELD_ROW, BAR_REMOVE_FIELD_ROW, BAR_TOGGLE_OUTPUT_VIEW, BAR_TOGGLE_PUBLISH_VIEW, BAR_UPDATE_FIELD_ROW } from "./constants";
import IStore, { IFieldRow } from "./IStore";
import { fieldRowsProp, isOutputOnDisplayProp, isPublishOnDisplayProp } from "./selectors";

export const addFieldRowAction = createAction(BAR_ADD_FIELD_ROW);
export const removeFieldRowAction = createAction(BAR_REMOVE_FIELD_ROW);
export const updateFieldRowAction = createAction(BAR_UPDATE_FIELD_ROW);
export const toggleOutputViewAction = createAction(BAR_TOGGLE_OUTPUT_VIEW);
export const togglePublishViewAction = createAction(BAR_TOGGLE_PUBLISH_VIEW);

export const makeAssetOutput = (fieldRows: IFieldRow[]) => {
  const asset = {
    "Asset": fieldRows,
  };
  return {
    fieldRows,
    assetOutput: JSON.stringify(asset, null, 2),
    schemaOutput: JSON.stringify(schemaGenerator.json('Asset', asset), null, 2),
  } as Partial<IStore>;
};

export const addFieldRow = (type: string) => (
  (dispatch: any, getState: any) => {
    const state = getState();
    const fieldRows = fieldRowsProp(state);
    const fieldRow: IFieldRow = {
      key: "",
      value: "",
      type,
    };
    fieldRows.push(fieldRow);
    dispatch(addFieldRowAction(makeAssetOutput([...fieldRows])));
  }
);

export const removeFieldRow = (index: number) => (
  (dispatch: any, getState: any) => {
    const state = getState();
    const fieldRows = fieldRowsProp(state);
    delete fieldRows[index];
    dispatch(removeFieldRowAction(makeAssetOutput(compact(fieldRows))));
  }
);

export const toggleOutputView = () => (
  (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(toggleOutputViewAction({
      isOutputOnDisplay: !isOutputOnDisplayProp(state),
      isPublishOnDisplay: false,
    }));
  }
);

export const togglePublishView = () => (
  (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(togglePublishViewAction({
      isOutputOnDisplay: false,
      isPublishOnDisplay: !isPublishOnDisplayProp(state),
    }));
  }
);

export const updateFieldRow = (index: number, key: string, value: string) => (
  (dispatch: any, getState: any) => {
    const state = getState();
    const fieldRows = fieldRowsProp(state);
    const fieldRow = fieldRows[index];
    fieldRow[key] = value;
    fieldRows[index] = fieldRow;
    dispatch(updateFieldRowAction(makeAssetOutput(fieldRows)));
  }
);

export const addFileToAssetOutput = (file: DropzoneFile) => (
  (dispatch: any, getState: any) => {
    const state = getState();
    const reader = new FileReader();
    const ipfsService = new IPFSService();
    reader.onloadend = () => {
      ipfsService.upload(reader.result as ArrayBuffer, file);
    };
    reader.readAsArrayBuffer(file);
  }
);
