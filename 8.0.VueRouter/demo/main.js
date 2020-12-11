const app = document.querySelector('#app')

const div1 = document.createElement('div')
div1.innerHTML = '1'
// const view1 = document.createElement('div')
// view1.style.background = 'red'
// view1.style.height = '50px'
// div1.appendChild(view1)

const div2 = document.createElement('div')
div2.innerHTML = '2'

const div3 = document.createElement('div')
div3.innerHTML = '3'

const div4 = document.createElement('div')
div4.innerHTML = '4'

const div404 = document.createElement('div')
div404.innerHTML = '未找到内容'

//路由表
const routeTable = {
    '1': div1,
    '2': div2,
    '3': div3,
    '4': div4,
    '404': div404
}

const div11 = document.createElement('div')
div11.innerHTML = '1.1'
const div12 = document.createElement('div')
div12.innerHTML = '1.2'
const div13 = document.createElement('div')
div13.innerHTML = '1.3'
// //div1的子路由
// const route1Table = {
//     "1/1": div11,
//     "1/2": div12,
//     "1/3": div13
// }

route(app)
window.addEventListener('hashchange', () => {
    route(app)
})

function route(el) {
    //获取用户去哪
    let number = window.location.hash.substr(1)
    number = number || 1
    //获取界面
    let div = routeTable[number.toString()]
    if (!div) {
        div = routeTable['404']
    }
    el.innerHTML = ""
    el.appendChild(div)
}