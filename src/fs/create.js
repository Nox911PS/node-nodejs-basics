import { open, close, write } from 'node:fs';

const file = 'src/fs/files/fresh.txt';
const content = new Buffer.from('I am fresh and young');

const create = async () =>
    open(file, 'wx', (err, fd) => {
        if (err && err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }

        write(fd, content, (err) => {
            if (err) {
                console.log('Something happens during writing. Error' + err.code);
                throw err;
            }
            close(fd, (err) => {
                if (err) throw err;
            });
        })
    });

await create();