const exec = require('child_process').exec;
const chw = process.cwd();
 process.chdir('../ui-common');
console.log(`Running DLL task at ${process.cwd()}`);
 exec('webpack --color -p', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
     process.chdir(chw);
     console.log(`stdouts: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});

