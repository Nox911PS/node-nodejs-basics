import {createWriteStream} from "node:fs";
import {stdin} from 'node:process'

const write = async () => {
    const filePath = 'src/streams/files/fileToWrite.txt';
    stdin.pipe(createWriteStream(filePath, 'utf-8'))
};

await write();