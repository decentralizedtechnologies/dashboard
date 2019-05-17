import { DropzoneFile } from "dropzone";

export default interface IStore {
  fieldRows: IFieldRow[];
  files: IFieldRow;
  dropzoneFiles: Array<Partial<DropzoneFile>>;
  assetOutput: string;
  schemaOuput: string;
  assetReference: string;
  txHash: string;
  versions: IAssetData[];
  isOutputOnDisplay: boolean;
  isPublishOnDisplay: boolean;
}

export interface IFieldRow {
  [key: string]: string | string[] | IFile[];
  key: string;
  value: string | string[] | IFile[];
  type: string;
}

export interface IFile {
  name: string;
  type: string;
  hash: string;
}

export interface IAssetData {
  Metadata: IFieldRow;
  Files: IFieldRow;
  Asset: IFieldRow[];
}
