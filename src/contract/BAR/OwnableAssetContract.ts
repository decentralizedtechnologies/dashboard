import OwnableAssetInterface from "contract/BAR/abi/OwnableAsset.json";
import map from "lodash/map";
import Web3Service from "service/Web3Service";
import { Contract as Web3Contract } from "web3-eth-contract";
import { ContractOptions } from "web3-eth-contract/types";
import { AbiItem } from "web3-utils/types";

export default class OwnableAssetContract {

  public web3: Web3Service = new Web3Service();

  public contract: Web3Contract;

  public constructor() {
    this.contract = new this.web3.eth.Contract(
      OwnableAssetInterface.abi as AbiItem[],
      undefined,
      {
        data: OwnableAssetInterface.bytecode,
      } as ContractOptions,
    );
  }

  public setAddress(address: string) {
    this.contract.options.address = address;
    return this;
  }

  public getVersionIndex(): Promise<any> {
    return this.contract.methods.getVersionIndex().call(); 
  }

  public getData(): Promise<string[]> {
    let index = 0;
    return new Promise((resolve, reject) => {
      const result: string[] = [];
      const call = async () => {
        this.contract.methods
          .data(index)
          .call()
          .then((data: any) => {
            if (data) {
              result.push(data);
              index++;
              call();
            } else {
              resolve(result);
            }
          }).catch((error: Error) => {
            resolve(result);
          });
      };
      call();
    });
  }
}
