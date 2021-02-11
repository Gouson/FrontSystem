const util = require('util')
const child_process = require('child_process')
const {
    exec,
    execFile,
    spawn
} = child_process

const exec2 = util.promisify(exec)



// const stream = exec('ls -l ../')
// stream.stdout.on('data', (chunk) => {
//     console.log('得到了数据')
//     console.log(chunk)
// })

// stream.stderr.on('data')




// exec2('ls ../').then(data => {
//     console.log(data.stdout)
// })


// const userInput = "."
// execFile('ls', ["-la", userInput], {
//     cwd: "C:\\",
//     env: {
//         NODE_ENV: 'development'
//     },
//     shell: '...shell的路径..',
//     maxBuffer: 1024 * 1024 * 2
// }, (error, stdout) => {
//     console.log(error)
//     console.log(stdout)
// })




const userInput = "."
const streams = spawn('ls', ["-la", userInput], {
    cwd: "C:\\",
    env: {
        NODE_ENV: 'development'
    }
})
streams.stdout.on('data', (chunk) => {
    console.log(chunk)
})