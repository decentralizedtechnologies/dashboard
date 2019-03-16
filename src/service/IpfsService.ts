import * as ipfsAPI from "ipfs-http-client";
import { ReadableStreamBuffer } from "stream-buffers";

const ipfs = ipfsAPI({ host: "ipfs.infura.io", port: "5001", protocol: "https" });

export default class IPFSService {

  public upload(fileContent: ArrayBuffer, file: File) {
    // const fileObj = {
    //   name: file.name,
    //   type: file.type,
    //   size: file.size,
    //   progress: 0,
    // };

    const stream = ipfs.addReadableStream();

    const myReadableStreamBuffer = new ReadableStreamBuffer({
      chunkSize: 25000,
    });

    myReadableStreamBuffer.put(Buffer.from(fileContent));

    stream.write(myReadableStreamBuffer);

    stream.on("data", (ipfsResponse: any) => {
      console.log(ipfsResponse);
    });

    myReadableStreamBuffer.on('data', (chunk) => {
      console.log(chunk);
      // myReadableStreamBuffer.resume();
    });

    // stream.write(myReadableStreamBuffer);

    // myReadableStreamBuffer.put(Buffer.from(fileContent));
    // myReadableStreamBuffer.stop();

    myReadableStreamBuffer.on("end", () => {
      console.log("END");
      stream.end();
    });

    // myReadableStreamBuffer.resume();
  }

}
