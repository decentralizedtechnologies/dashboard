import { DropzoneFile } from "dropzone";
import schemaGenerator from "generate-schema";
import compact from "lodash/compact";
import { createAction } from "redux-actions";
import IPFSService from "service/IpfsService";
import { BAR_ADD_DROPZONE_FILE, BAR_ADD_FIELD_ROW, BAR_ADD_IPFS_FILE, BAR_REMOVE_DROPZONE_FILE, BAR_REMOVE_FIELD_ROW, BAR_TOGGLE_OUTPUT_VIEW, BAR_TOGGLE_PUBLISH_VIEW, BAR_UPDATE_FIELD_ROW } from "./constants";
import IStore, { IFieldRow } from "./IStore";
import { dropzoneFilesProp, fieldRowsProp, filesProp, isOutputOnDisplayProp, isPublishOnDisplayProp } from "./selectors";

export const addFieldRowAction = createAction(BAR_ADD_FIELD_ROW);
export const removeFieldRowAction = createAction(BAR_REMOVE_FIELD_ROW);
export const updateFieldRowAction = createAction(BAR_UPDATE_FIELD_ROW);
export const toggleOutputViewAction = createAction(BAR_TOGGLE_OUTPUT_VIEW);
export const togglePublishViewAction = createAction(BAR_TOGGLE_PUBLISH_VIEW);
export const addIpfsFileAction = createAction(BAR_ADD_IPFS_FILE);
export const addDropzoneFileAction = createAction(BAR_ADD_DROPZONE_FILE);
export const removeDropzoneFileAction = createAction(BAR_REMOVE_DROPZONE_FILE);

export const makeAssetOutput = (fieldRows: IFieldRow[], files: IFieldRow): Partial<IStore> => {
  const asset = {
    Asset: fieldRows,
    Files: files,
  };
  const schema = schemaGenerator.json("OwnableAsset", asset);
  asset["Schema"] = {
    key: schema["$schema"],
    value: schema,
    type: "schema",
  };
  return {
    fieldRows,
    assetOutput: JSON.stringify(asset, null, 2),
  } as Partial<IStore>;
};

export const addFieldRow = (type: string) => (
  (dispatch: any, getState: any) => {
    const state = getState();
    const fieldRows = fieldRowsProp(state);
    const files = filesProp(state);
    const fieldRow: IFieldRow = {
      key: "",
      value: "",
      type,
    };
    fieldRows.push(fieldRow);
    dispatch(addFieldRowAction(makeAssetOutput([...fieldRows], files)));
  }
);

export const removeFieldRow = (index: number) => (
  (dispatch: any, getState: any) => {
    const state = getState();
    const fieldRows = fieldRowsProp(state);
    const files = filesProp(state);
    delete fieldRows[index];
    dispatch(removeFieldRowAction(makeAssetOutput(compact(fieldRows), files)));
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
    const files = filesProp(state);
    const fieldRow = fieldRows[index];
    fieldRow[key] = value;
    fieldRows[index] = fieldRow;
    dispatch(updateFieldRowAction(makeAssetOutput(fieldRows, files)));
  }
);

export const addFileToAssetOutput = (file: DropzoneFile) => (
  (dispatch: any, getState: any) => {
    const state = getState();
    const dropzoneFiles = dropzoneFilesProp(state);
    const { name, size, type } = file;
    dropzoneFiles.push({ name, size, type });
    dispatch(addDropzoneFileAction());
    const files = filesProp(state);
    const fieldRows = fieldRowsProp(state);
    const reader = new FileReader();
    const ipfsService = new IPFSService();
    reader.onloadend = async () => {
      try {
        const {
          hash,
        } = await ipfsService.upload(Buffer.from(reader.result as ArrayBuffer));
        (files.value as string[]).push(hash);
        dispatch(addIpfsFileAction({ files }));
        dispatch(addFieldRowAction(makeAssetOutput(fieldRows, files)));
      } catch (error) {
        console.error(error);
      }
    };
    reader.readAsArrayBuffer(file);
  }
);
