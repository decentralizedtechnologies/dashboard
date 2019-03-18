import AssetInterface from "contract/BAR/abi/Asset.json";
import Web3Provider from "service/Web3Service";
import { TransactionReceipt } from "web3-core/types";
import { Contract as Web3Contract } from "web3-eth-contract";
import { ContractOptions } from "web3-eth-contract/types";
import { AbiItem } from "web3-utils/types";

export default class AssetContract {

  public web3: Web3Provider = new Web3Provider();

  public contract: Web3Contract;

  public constructor() {
    this.contract = new this.web3.eth.Contract(
      AssetInterface.abi as AbiItem[],
      undefined,
      {
        data: AssetInterface.bytecode,
      } as ContractOptions,
    );
  }

  public setAddress(address: string) {
    this.contract.options.address = address;
    return this;
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

  public deploy(data: string): Promise<TransactionReceipt> {
    const {
      send,
    } = this.contract.deploy({
      data: AssetInterface.bytecode,
      arguments: [data],
    });
    return new Promise(async (resolve, reject) => {
      const from = (this.web3.instance.givenProvider as any).selectedAddress;
      send({
        from,
      }).on("error", (error: Error) => {
        reject(error);
      }).on("receipt", (receipt: TransactionReceipt) => {
        resolve(receipt);
      }).then((contract: Web3Contract) => {
        this.contract = contract;
      });
    });
  }
}
