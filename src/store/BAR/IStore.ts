export default interface IStore {
  fieldRows: IFieldRow[];
  assetOutput: string;
  schemaOuput: string;
  isOutputOnDisplay: boolean;
  isPublishOnDisplay: boolean;
}

export interface IFieldRow {
  [key: string]: string;
  key: string;
  value: string;
  type: string;
}
