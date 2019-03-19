import OwnableAssetRegistry from "contract/BAR/abi/OwnableAssetRegistry.json";
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

  public newAsset(data: string, onTxHash?: (hash: string) => void): Promise<TransactionReceipt> {
    return new Promise((resolve, reject) => {
      const {
        send,
      } = this.contract.methods.newAsset(data);
      const from = (this.web3.instance.givenProvider as any).selectedAddress;
      send({
        from,
      }).on("error", (error: Error) => {
        reject(error);
      }).on("transactionHash", (hash: string) => {
        onTxHash(hash);
      }).on("confirmation", (num: number, receipt: TransactionReceipt) => {
        resolve(receipt);
      }).then((receipt: TransactionReceipt) => {
        resolve(receipt);
      });
    });
  }
}
