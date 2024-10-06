import {stdin, stdout} from 'node:process'
import { Transform} from 'node:stream'

const transform = async () => {
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse().toString());
        },
    });
    stdin.pipe(transform).pipe(stdout);
};

await transform();