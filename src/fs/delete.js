import { rm } from 'node:fs';

const fileToRename = 'src/fs/files/fileToRemove.txt';

const remove = async () => {
    rm(fileToRename, (err) => {
        if (err && err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    });
};

await remove();