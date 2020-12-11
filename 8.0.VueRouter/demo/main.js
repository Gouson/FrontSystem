//路由表
const div1 = document.createElement('div')
div1.innerHTML = '1'
const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'
const div404 = document.createElement('div')
div404.innerHTML = '未找到内容'

const routeTable = {
    '1': div1,
    '2': div2,
    '3': div3,
    '4': div4,
    '404': div404
}
route()
window.addEventListener('hashchange', () => {
    route()
})

function route() {
    //获取用户去哪
    let number = window.location.hash.substr(1)
    const app = document.querySelector('#app')
    number = number || 1
    //获取界面
    let div = routeTable[number.toString()]
    if (!div) {
        div = routeTable['404']
    }
    app.innerHTML = ""
    if (app) app.appendChild(div)
}