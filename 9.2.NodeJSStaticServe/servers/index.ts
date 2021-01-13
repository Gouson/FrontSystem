import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';
const server = http.createServer()
server.on('request', (request: IncomingMessage, respnose: ServerResponse) => {
    console.log(request.method)
    console.log(request.url)
    console.log(request.headers)
    respnose.end('hi')
})

server.listen(8888)