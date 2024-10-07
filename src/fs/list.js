import {readdir} from 'node:fs';

const files = 'src/fs/files';

const list = async () => {
    readdir(files, (err, fileList) => {
        if (err) {
            throw err.code === 'ENOENT' ? new Error('FS operation failed'): err;
        }
        console.log(fileList);
    })
};

await list();