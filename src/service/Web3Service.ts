import Web3 from "web3";
import { Eth } from "web3-eth";
import { provider as Web3Provider } from "web3-providers/types";
import { Utils } from "web3-utils";

declare const window: any;

export default class Web3Service {

  public utils: Utils;
  public eth: Eth;
  public instance: Web3;
  public network: string;

  constructor(network: string = process.env.REACT_APP_ETHEREUM_NETWORK) {
    this.network = network;
    const provider = new Web3.providers.HttpProvider(network);
    this.instance = new Web3(provider, undefined, {});
    this.utils = this.instance.utils;
    this.eth = this.instance.eth;
  }

  public setProvider(p: Web3Provider) {
    this.instance.setProvider(p);
    return this;
  }

  public enableEthereumBrowser() {
    return new Promise(async (resolve, reject) => {
      if (window.ethereum) {
        try {
          await window.ethereum.enable();
          this.setProvider(window.ethereum);
          resolve(true);
        } catch (error) {
          reject(error);
        }
      } else {
        reject("No-Ethereum browser detected. You should consider trying MetaMask!");
      }
    });
  }
}
