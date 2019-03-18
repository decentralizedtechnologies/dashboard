import { AxiosResponse } from "axios";
import { push } from "connected-react-router";
import AssetContract from "contract/BAR/AssetContract";
import map from "lodash/map";
import reverse from "lodash/reverse";
import { BARAssetLookupRoute } from "page/routes";
import { createAction } from "redux-actions";
import IPFSService from "service/IpfsService";
import { makeAssetOutput } from "./actions";
import { BAR_SET_ASSET_REFERENCE, BAR_SET_ASSET_VERSIONS } from "./constants";
import { IAssetData } from "./IStore";
import { assetReferenceProp, fieldRowsProp, filesProp } from "./selectors";

export const setAssetReferenceAction = createAction(BAR_SET_ASSET_REFERENCE);
export const setAssetVersionsAction = createAction(BAR_SET_ASSET_VERSIONS);

export const setAssetReference = (assetReference: string) => (
  (dispatch: any, getState: any) => {
    const state = getState();
    // TODO check for valid assetReference (Ethereum address, etc...) by blockchain
    dispatch(setAssetReferenceAction({
      assetReference,
    }));
  }
);

export const getAssetDetails = () => (
  async (dispatch: any, getState: any) => {
    const state = getState();
    const assetReference = assetReferenceProp(state);
    if (!assetReference) {
      return;
    }
    try {
      const assetContract = new AssetContract();
      await assetContract.web3.enableEthereumBrowser();
      assetContract.setAddress(assetReference);
      const contractData = await assetContract.getData();
      if (contractData.length === 0) {
        // TODO display that no contractData was found in the contract
        return;
      }
      const ipfsService = new IPFSService();
      const files = map(contractData, (hash: string) => ipfsService.get(hash));
      Promise.all(files)
        .then((response: AxiosResponse[]) => {
          const versions: IAssetData[] = map(response, ({ data: version }: AxiosResponse) => version);
          dispatch(setAssetVersionsAction({
            versions: reverse(versions),
          }));
        }).catch((error: Error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
);

export const publishAssetContract = () => (
  async (dispatch: any, getState: any) => {
    const state = getState();
    const ipfsService = new IPFSService();
    const fieldRows = fieldRowsProp(state);
    const files = filesProp(state);
    const output = makeAssetOutput(fieldRows, files);
    try {
      const assetContract = new AssetContract();
      await assetContract.web3.enableEthereumBrowser();
      const {
        hash,
      } = await ipfsService.upload(Buffer.from(output.assetOutput as string));
      const receipt = await assetContract.deploy(hash);
      dispatch(setAssetReferenceAction({
        assetReference: receipt.contractAddress,
      }));
      dispatch(push(BARAssetLookupRoute));
    } catch (error) {
      console.error(error);
    }
  }
);
