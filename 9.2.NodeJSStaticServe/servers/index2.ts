import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';
import * as fs from 'fs';
import * as p from 'path';
import * as url from 'url';
const server = http.createServer()
let catchAge = 3600 * 24 * 365
const publicDir = p.resolve(__dirname, 'public')
server.on('request', (request: IncomingMessage, response: ServerResponse) => {
    const { method, url: path, headers } = request
    if (method !== 'GET') {
        response.statusCode = 405
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.end('不支持非GET请求')
        return
    }
    const { pathname, search } = url.parse(path)
    console.log(pathname, search)
    // response.setHeader('Content-Type', 'text/html;charset=utf-8')
    let filename = pathname.substr(1)
    if (filename === '') { filename = 'index.html' }
    fs.readFile(p.resolve(publicDir, filename), (error, data) => {
        if (error) {
            if (error.errno === -4058) {
                response.statusCode = 404
                response.setHeader('Content-Type', 'text/html;charset=utf-8')
                fs.readFile(p.resolve(publicDir, '404.html'), (error, data) => {
                    response.end(data)
                })

            } else if (error.errno === -4068) {
                response.statusCode = 403
                response.setHeader('Content-Type', 'text/html;charset=utf-8')
                response.end('无权限访问目录')
            } else {
                response.statusCode = 500
                response.setHeader('Content-Type', 'text/html;charset=utf-8')
                response.end('服务器有问题')
            }

        } else {
            //返回文件内容
            response.setHeader('Cache-Control', `public,max-age=${catchAge}`)
            response.end(data)
        }

    })
})

server.listen(8888)