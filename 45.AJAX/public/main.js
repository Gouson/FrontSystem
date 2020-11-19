console.log('我是main.js')

getcss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './style.css')
    request.onload = () => {
        console.log('request.response', request.response)
            // 创建style标签
        const style = document.createElement('style')
            //填写style内容
        style.innerHTML = request.response
            //插入到头部
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}