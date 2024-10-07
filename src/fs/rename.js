import {rename as renameFs, stat} from 'node:fs';

const fileToRename = 'src/fs/files/wrongFilename.txt';
const renamedFile = 'src/fs/files/properFilename.md';

const rename = async () => {
    stat(renamedFile, (err) => {
        if (err && err.code === 'ENOENT') {
            renameFs(fileToRename, renamedFile, (err) => {
                if (err) {
                    throw err.code === 'ENOENT' ? new Error('FS operation failed') : err;
                }
            })
        } else {
            throw new Error('FS operation failed')
        }
    })
};

await rename();