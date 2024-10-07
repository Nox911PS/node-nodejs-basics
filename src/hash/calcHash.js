import {createHash} from 'node:crypto';
import { createReadStream} from 'node:fs';
import { stdout } from 'node:process';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const stream = createReadStream('src/hash/files/fileToCalculateHashFor.txt');

    stream.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();