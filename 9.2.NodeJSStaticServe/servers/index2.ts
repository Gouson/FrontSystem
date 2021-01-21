import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';
const server = http.createServer()
server.on('request', (request: IncomingMessage, respnose: ServerResponse) => {
    console.log(request.method)
    console.log(request.url)
    console.log(request.headers)

    const array = []
    request.on('data', (chunk: Buffer) => {
        array.push(chunk)
    })
    request.on('end', (chunk) => {
        const body = Buffer.concat(array).toString()
        console.log(body)

        respnose.statusCode = 400
        respnose.setHeader('x-gouson', 'iammmm')
        // respnose.setHeader('Content-type', 'image/png')

        respnose.write('1\n')
        respnose.write('2\n')
        respnose.write('3\n')
        respnose.end()
    })

})

server.listen(8888)