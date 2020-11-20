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
getjs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './2.js')
    request.onload = () => {
        console.log('request.response', request.response)
            // 创建style标签
        const script = document.createElement('script')
            //填写style内容
        script.innerHTML = request.response
            //插入到头部
        document.head.appendChild(script)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}
gethtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './3.html')
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4) {
            console.log('下载完成')
            if (request.status >= 200 && request.status < 300) {
                console.log(`判断状态码为2xx`)
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                console.log(`加载失败`)
            }
        }
    }
    request.send()
}
getxml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseXML)
            const dom = request.responseXML
            const text = dom.getElementsByTagName(`warning`)[0].textContent
            console.log(text.trim())

        }
    }
    request.send()
}
getjson.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            console.log(object)
            myName.textContent = object.name
        }
    }
    request.send()
}
let n = 1
getpage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(element => {
                const li = document.createElement('li')
                li.textContent = element.id
                ulxxx.appendChild(li)
            });
            n += 1
        }
    }
    request.send()
}