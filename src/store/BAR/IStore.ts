import { DropzoneFile } from "dropzone";

export default interface IStore {
  fieldRows: IFieldRow[];
  files: IFieldRow;
  dropzoneFiles: Array<Partial<DropzoneFile>>;
  assetOutput: string;
  schemaOuput: string;
  assetReference: string;
  versions: IAssetData[];
  isOutputOnDisplay: boolean;
  isPublishOnDisplay: boolean;
}

export interface IFieldRow {
  [key: string]: string | string[];
  key: string;
  value: string | string[];
  type: string;
}

export interface IAssetData {
  Schema: IFieldRow;
  Files: IFieldRow;
  Asset: IFieldRow[];
}
