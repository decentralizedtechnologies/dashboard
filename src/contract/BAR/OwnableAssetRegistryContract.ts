import OwnableAssetRegistry from "contract/BAR/abi/OwnableAssetRegistry.json";
import map from "lodash/map";
import Web3Service from "service/Web3Service";
import { TransactionReceipt } from "web3-core/types";
import { Contract as Web3Contract } from "web3-eth-contract";
import { ContractOptions } from "web3-eth-contract/types";
import { AbiItem } from "web3-utils/types";

export default class OwnableAssetRegistryContract {

  public web3: Web3Service = new Web3Service();

  public contract: Web3Contract;

  public constructor() {
    this.contract = new this.web3.eth.Contract(
      OwnableAssetRegistry.abi as AbiItem[],
      process.env.REACT_APP_BAR_OWNABLE_ASSET_REGISTRY_ADDRESS,
      {
        data: OwnableAssetRegistry.bytecode,
      } as ContractOptions,
    );
  }

  public setAddress(address: string) {
    this.contract.options.address = address;
    return this;
  }

  public getVersionIndex(): Promise<number> {
    return this.contract.methods.versionIndex().call();
  }

  public getData(versionIndex: number): Array<Promise<string>> {
    return map(Array.from(Array(versionIndex).keys()), (index: number) =>
      this.contract.methods.data(index).call()
    );
  }

  public newAsset(data: string): Promise<TransactionReceipt> {
    return new Promise(async (resolve, reject) => {
      const {
        send,
      } = this.contract.methods.newAsset(data);
      const from = (this.web3.instance.givenProvider as any).selectedAddress;
      send({
        from,
      }).on("error", (error: Error) => {
        reject(error);
      }).on("receipt", (receipt: TransactionReceipt) => {
        resolve(receipt);
      });
    });
  }
}
