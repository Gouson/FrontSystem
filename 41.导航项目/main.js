const $siteList = $('.siteList')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
window.hashMap = xObject || [
    { logo: 'A', logoType: 'text', url: 'https://www.acfun.cn' },
    { logo: './imgs/bili.png', logoType: 'image', url: 'https://www.bilibili.com' },
]
const simpleUrl = (url) => {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '')
}
const render = () => {
    console.log($siteList.find('li:not(.last)'))
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node, index) => {
        const $li = $(`<li>
       
            <div class="site">
                <div class="logo">
                    <img src='https://${simpleUrl(node.url)}/favicon.ico' onerror="this.src='/imgs/default.png'"/>
                </div>
                <div class="link">${simpleUrl(node.url)}</div>
                <div class="close">
                <svg class="icon">
                    <use xlink:href="#icon-close"></use>
                </svg></div>
            </div>
    </li>`).insertBefore($('.last'))
        $li.on('click', (e) => {
            window.open(node.url)
        })
        $li.on('click', '.close', (e) => {
            e.stopPropagation();
            hashMap.splice(index, 1)
            render()
        })
    })
}
render()

$('.addButton').on('click', (e) => {
    let url = window.prompt('输入网址')
    if (url.indexOf('http') !== 0) {
        url = `https://` + url
    }
    hashMap.push({ logo: url[0], logoType: 'text', url: url })
    render()
    setLocalStorage()
})

window.onbeforeunload = () => {
    setLocalStorage()
}

setLocalStorage = () => {
    localStorage.setItem('x', JSON.stringify(hashMap))
}