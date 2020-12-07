import x from './x.js'
import './x.css'
import img from './assets/tes.jpg'
const body = document.getElementsByTagName('body')[0]
const div = document.getElementById('app2')
div.innerHTML = `<img src="${img}">`
console.log(x)
console.log('222')

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log(`模块加载错误`)
    })
}   
body.appendChild(button)