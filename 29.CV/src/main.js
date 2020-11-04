let html = document.querySelector('#demo')
let style = document.querySelector('#style')
let string = `/*
hi
我要加样式了
我要加的样式是
*/
#div1{
    width:200px;
    height:200px;
}
/*
把div变成一个八卦图
注意看
首先把变个圆圈
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
八卦是阴阳
一黑一白
*/
#div1{
    background: linear-gradient(90deg,rgba(255,255,255,1)
    0%, rgba(255,255,255,1) 50%, 
    rgba(0,0,0,1) 50%, 
    rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/
#div1::before{
    width:50%;
    height:50%;
    left:0;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, 
        rgba(0,0,0,1) 0%, 
        rgba(0,0,0,1) 25%, 
        rgba(255,255,255,1) 25%, 
        rgba(255,255,255,1) 100%);
}
#div1::after{
    width:50%;
    height:50%;
    left:0;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, 
        rgba(255,255,255,1) 0%, 
        rgba(255,255,255,1) 25%, 
        rgba(0,0,0,1) 25%, 
        rgba(0,0,0,1) 100%);
}
/*
接下来让他旋转
*/
@keyframes x {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
} 
#div1 {
    animation: x 10s infinite linear;
}
`
let string2 = ``
let n = 0
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp'
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)
        if (n < string.length - 1) {
            n += 1
            step()
        }
    }, 1)
}
step()