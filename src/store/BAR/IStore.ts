import { DropzoneFile } from "dropzone";

export default interface IStore {
  fieldRows: IFieldRow[];
  files: IFieldRow;
  dropzoneFiles: Array<Partial<DropzoneFile>>;
  assetOutput: string;
  schemaOuput: string;
  isOutputOnDisplay: boolean;
  isPublishOnDisplay: boolean;
}

export interface IFieldRow {
  [key: string]: string | string[];
  key: string;
  value: string | string[];
  type: string;
}
