
import React from 'react'
let n = 0
const root = document.querySelector('#root')
const root2 = document.querySelector('#root2')
const App = () => React.createElement('div', {
        className: 'red'
    },
    [
        n,
        React.createElement('button', {
            onClick: () => {
                n += 1
                ReactDOM.render(App(), root)
            }
        }, '+1')
    ]
)
ReactDOM.render(App(), root)

// 条件判断
const Component=()=>{
    return (n%2===0) ? (<div>n是偶数</div>):(<span>n是奇数</span>)
}
ReactDOM.render(<Component />, root2)