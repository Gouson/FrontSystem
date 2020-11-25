const string = `
.skin>* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.skin>* ::before {
    box-sizing: border-box;
}

.skin>*::after {
    box-sizing: border-box;
}

.skin {
    min-height: 65vh;
    background: #ffe600;
    position: relative;
}


.nose {
    border: 10px solid;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    margin-left: -5px;
    top: 145px;
    /* border-radius: 15px 0 0; */
    /* transform: rotate(45deg) translateX(-50%); */
}

.nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(5deg);
    }

    50% {
        transform: rotate(0deg);
    }

    75% {
        transform: rotate(-5deg);
    }

    100% {
        transform: rotate(0);
    }
}

.yuan {
    position: absolute;
    width: 18px;
    height: 6px;
    top: -14px;
    left: -9px;
    border-radius: 50% 50% 0 0;
    background-color: black;
}

.eye {
    border: 2px solid #000;
    position: absolute;
    width: 64px;
    height: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #000;
    border-radius: 50%;
}

.eye::before {
    content: '';
    display: block;
    border: 3px solid #fff;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 4px;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 180px;
    margin-left: -100px;
}

.mouth .up {
    display: flex;
    justify-content: center;
}

.mouth .up .lip {
    border: 3px solid;
    height: 30px;
    width: 100px;
    z-index: 1;
    background: #ffe600;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    border-color: transparent transparent transparent black;
    transform: rotate(-14deg) translateZ(0) translateX(0px);
}

.mouth .up .lip.left::before {
    content: '';
    display: block;
    width: 3px;
    height: 3px;
    background: #000;
    position: absolute;
    bottom: -3px;
    right: -3px;
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    border-color: transparent black transparent transparent;
    transform: rotate(14deg) translateZ(0) translateX(0px);
}

.mouth .up .lip.right::before {
    content: '';
    display: block;
    width: 3px;
    height: 3px;
    background: #000;
    position: absolute;
    bottom: -3px;
    left: -3px;
}

.mouth .down {
    width: 100%;
    height: 180px;
    position: absolute;
    top: 10px;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid #000;
    background: #9b000a;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100px/400px;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -100px;
    background: #ff485f;
    border-radius: 100px;
}

.face {
    position: absolute;
    left: 50%;
    margin-left: -44px;
    border: 3px #000 solid;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    top: 200px;
    background: #ff0000;
}

.face>img {
    position: absolute;
    top: 50%;
    left: 50%;
}

.face.left {
    transform: translateX(-180px);
}

.face.left>img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
}

.face.right {
    transform: translateX(180px);
}`

const player = {
    id: undefined,
    n: 1,
    time: 50,
    init: () => {
        code.innerText = string.substr(0, player.n)
        style.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.play()
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnFast': 'fast',
        '#btnNormal': 'normal',
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                document.querySelector(key).onclick = player[player.events[key]]
            }
        }

    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            clearInterval(player.id)
            return
        }
        code.innerText = string.substr(0, player.n)
        style.innerHTML = string.substr(0, player.n)
        code.scrollTop = code.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time);
    },
    pause: () => {
        clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 50
        player.play()
    }
}
player.init()