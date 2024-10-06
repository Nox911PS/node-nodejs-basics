import { Worker} from 'node:worker_threads';

const cpuNumber = 4;
const startData = 9;
const allPromise = []

const performCalculations = async () => {
    for(let i = 0; i < cpuNumber; i++) {
        allPromise.push(
            new Promise((resolve, reject) => {
                const worker = new Worker('./src/wt/worker.js', {workerData: startData + i});

                worker.on('message', (data) => {
                    resolve({index: i, result: {status: 'resolved', data }});
                });
                worker.on('error', () => {
                    resolve({index: i, result: { status: 'error', data: null }});
                    }
                );
            })
        );
    }

    Promise.all(allPromise).then((result) => {
        console.log(
            result.sort((a,b) => a.index - b.index).map(item => item.result)
        );
    })
};

await performCalculations();