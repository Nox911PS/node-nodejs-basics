import { cp } from 'node:fs'

const currentFolder = 'src/fs/files';
const destinationFolder = 'src/fs/files_copy';

const copy = async () => {
    cp(currentFolder, destinationFolder, {errorOnExist: true, force: false, recursive: true}, (err) => {
        if (err) {
            throw err.code === 'ERR_FS_CP_EEXIST' ? new Error('FS operation failed') : err;
        }
    })
};

await copy();
