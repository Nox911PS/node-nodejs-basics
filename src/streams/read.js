import {stdout} from 'node:process';
import {createReadStream} from "node:fs";

const read = async () => {
   const filePath = 'src/streams/files/fileToRead.txt';

   createReadStream(filePath).pipe(stdout);
};

await read();