// const fs = require('fs')
// const stream = fs.createWriteStream('./big_file.txt')
// for (let i = 0; i < 100000; i++) {
//     stream.write(`这是第${i}行内容\n`)
// }
// stream.end()
// console.log('done')


// const fs = require('fs')
// const http = require('http')
// const server = http.createServer()
// server.on('request', (request, response) => {
//     fs.readFile('./big_file.txt', (error, data) => {
//         if (error) throw error
//         response.end(data)
//         console.log('done')
//     })
// })
// server.listen(8888)
// console.log('8888')



const fs = require('fs')
const http = require('http')
const server = http.createServer()
server.on('request', (request, response) => {
    const stream =
        fs.createReadStream('./big_file.txt')
    stream.pipe(response)
    stream.on('end', () => console.log('done'))
})
server.listen(8888)
console.log('8888')