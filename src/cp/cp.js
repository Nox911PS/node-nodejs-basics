import {fork} from 'node:child_process';

const spawnChildProcess = async (args) => {
   const cp = fork('src/cp/files/script.js', args, {
      stdio: ['pipe', 'pipe', 'pipe', 'ipc']
   });

   process.stdin.pipe(cp.stdin);
   cp.stdout.pipe(process.stdout);
   cp.stderr.pipe(process.stderr);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['test', 2]);
