import ipfsClient from "ipfs-http-client";

const ipfs = ipfsClient({ host: "ipfs.infura.io", port: "5001", protocol: "https" });

export default class IPFSService {

  public upload(fileContent: ArrayBuffer, file: File): Promise<any> {
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
      stream.write(Buffer.from(fileContent));
      stream.end();
    });
  }

}
