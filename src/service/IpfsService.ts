import axios, { AxiosPromise } from "axios";
import ipfsClient from "ipfs-http-client";

const ipfs = ipfsClient({ host: "ipfs.infura.io", port: "5001", protocol: "https" });

export default class IPFSService {

  public upload(content: Buffer): Promise<any> {
    return new Promise((resolve, reject) => {
      const stream = ipfs.addReadableStream();
      stream.on("data", (ipfsResponse: any) => {
        resolve(ipfsResponse);
      });
      stream.on("end", () => {
        console.log("END");
      });
      stream.on("error", (error: any) => {
        reject(error);
      });
      stream.write(content);
      stream.end();
    });
  }

  public get(hash: string): AxiosPromise<any> {
    return axios.get(`https://ipfs.infura.io/ipfs/${hash}`);
  }
}
