var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function(request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) { queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/

    console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

    // if(path === '/'){
    //   response.statusCode = 200
    //   response.setHeader('Content-Type', 'text/html;charset=utf-8')
    //   response.write(fs.readFileSync(`./public/index.html`))
    //   response.end()
    // } else if(path === '/style.css'){
    //   response.statusCode = 200
    //   response.setHeader('Content-Type', 'text/css;charset=utf-8')
    //   response.write(fs.readFileSync(`./public/style.css`))
    //   response.end()
    // }else {
    //   response.statusCode = 404
    //   response.setHeader('Content-Type', 'text/html;charset=utf-8')
    //   response.write(`<div>你访问的页面不存在</div>`)
    //   response.end()
    // }
    if (path === '/home.html') {
        const cookie = request.headers['cookie']
        let userId
        try {
            userId = cookie.split(';').filter(s => s.indexOf('user_id=') >= 0)[0].split('=')[1]

        } catch (error) {

        }

        if (userId) {
            const usersArray = JSON.parse(fs.readFileSync('./db/users.json').toString())
            const user = usersArray.find(u =>
                u.id.toString() === userId.toString()
            )
            let homeHtml = fs.readFileSync(`./public/home.html`).toString()
            let string = ``
            console.log(user)
            if (user) {
                string = homeHtml.replace('{{loginStatus}}', '已登录').replace('{{user.name}}', user.name)

            } else {
                string = homeHtml.replace('{{loginStatus}}', '未登录').replace('{{user.name}}', '')
            }
            response.write(string)
        } else {
            string = homeHtml.replace('{{loginStatus}}', '未登录').replace('{{user.name}}', '')
            response.write(string)
        }
        // response.setHeader('Content-Type', 'text/html;charset=utf-8')
        // response.statusCode = 200
        response.end()
    } else if (path === '/sign_in' && method === 'POST') {
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        const array = [

            ]
            //读取数据库
        const usersArray = JSON.parse(fs.readFileSync('./db/users.json').toString())
        request.on('data', (chunk) => {
            array.push(chunk)
        })
        request.on('end', () => {
            const string = Buffer.concat(array).toString()
            const obj = JSON.parse(string)
            const user = usersArray.find(user =>
                user.name === obj.name && user.password === obj.password
            )
            if (user === undefined) {
                response.statusCode = 400
                response.setHeader('Content-Type', 'text/json;charset=utf-8')
                response.end(`{"errorCode":4001}`)
            } else {
                response.statusCode = 200
                response.setHeader('Set-Cookie', `user_id=${user.id};HttpOnly`)
                response.end()
            }
        })
        response.statusCode = 200
    } else if (path === '/register' && method === 'POST') {

        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        const array = [

            ]
            //读取数据库
        const usersArray = JSON.parse(fs.readFileSync('./db/users.json').toString())
        request.on('data', (chunk) => {
            array.push(chunk)
        })
        request.on('end', () => {
            const string = Buffer.concat(array).toString()
            const obj = JSON.parse(string)
            const lastUser = usersArray[usersArray.length - 1]
            const newUser = { id: lastUser ? lastUser.id + 1 : 1, name: obj.name, password: obj.password }
                //写入数据哭
            usersArray.push(newUser)
            fs.writeFileSync('./db/users.json', JSON.stringify(usersArray))
            response.end('很好')
        })
        response.statusCode = 200

    } else {
        response.statusCode = 200
        const filePath = path === '/' ? '/index.html' : path
        const index = filePath.lastIndexOf('.')
        const suffix = filePath.substring(index)
        const fileType = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.png': 'image/png',
            '.jpg': 'image/jpeg'
        }
        response.setHeader('Content-Type', `${fileType[suffix] || 'text/html'};charset=utf-8`)
        let content
        try {
            content = fs.readFileSync(`./public${filePath}`)
        } catch (error) {
            response.statusCode = 404
            content = `文件不存在`
        }

        response.write(content)
        response.end()
    }
    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)