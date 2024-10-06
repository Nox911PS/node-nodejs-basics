import {readFile} from 'node:fs';

const fileToRead = 'src/fs/files/fileToRead.txt';

const read = async () => {
    readFile(fileToRead,  'utf8', (err, content) => {
        if (err) {
            throw err.code === 'ENOENT' ? new Error('FS operation failed'): err;
        }

        console.log(content);
    })
};

await read();