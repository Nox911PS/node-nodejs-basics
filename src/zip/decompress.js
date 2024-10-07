import { pipeline } from 'node:stream';
import { createGunzip} from 'node:zlib';
import {
    createReadStream,
    createWriteStream,
} from'node:fs';

const decompress = async () => {
    const gunzip = createGunzip();
    const source = createReadStream('src/zip/files/archive.gz');
    const destination = createWriteStream('src/zip/files/fileToCompress.txt');

    pipeline(source, gunzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = -1;
        }
    });
};

await decompress();