// jQuery核心思想  闭包，链式操作
window.$ = window.jQuery = function(selectorOrArrayOrTemplate) {
    let elements
    if (typeof selectorOrArrayOrTemplate === 'string') {
        if (selectorOrArrayOrTemplate[0] === "<") {
            // 创建 div
            elements = [createElement(selectorOrArrayOrTemplate)];
        } else {
            // 查找 div
            elements = document.querySelectorAll(selectorOrArrayOrTemplate);
        }
    } else if (selectorOrArrayOrTemplate instanceof Array) {
        elements = selectorOrArrayOrTemplate
    }

 
    //可以操作elements
    return {
        find(selectorOrArrayOrTemplate) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                const elements2 = (Array.from(elements[i].querySelectorAll(selectorOrArrayOrTemplate)))
                array = array.concat(elements2)
            }
            array.oldApi = this //this就是api
            return $(array)
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i)
            }
            return this
        },
        parent() {
            const array = []
            this.each(node => {
                if (array.indexOf(node.parentNode) === -1) {
                    array.push(node.parentNode)
                }
            })
            return $(array)
        },
        children() {
            const array = []
            this.each(node => {
                array.push(...node.children)
            })
            return $(array)
        },
        siblings() {
            let array = []
            this.each(node => {
                array.push(...Array.from(node.parentNode.children).filter(n => n !== node))
            })
            return $(array)
        },
        index() {
            let resultIndexArray = []
                // for (let i = 0; i < elements.length; i++) {
                //     let childrenArray = elements[i].parentNode.children
                //     for (let j = 0; j < childrenArray.length; j++) {
                //         if (elements[i] === childrenArray[j]) {
                //             resultIndexArray.push(j)
                //         }
                //     }
                // }
            this.each((node) => {
                let arr = node.parentNode.children
                for (let i = 0; i < arr.length; i++) {
                    if (node === arr[i]) {
                        resultIndexArray.push(i)
                    }
                }
            })
            return resultIndexArray
        },
        next() {
            let arr = []
            for (let i = 0; i < elements.length; i++) {
                let x = elements[i].nextSibling
                while (x && x.nodeType === 3) {
                    x = x.nextSibling
                }
                arr.push(x)
            }
            return $(arr)
        },
        prev() {
            let arr = []
            for (let i = 0; i < elements.length; i++) {
                let x = elements[i].previousSibling
                while (x && x.nodeType === 3) {
                    x = x.previousSibling
                }
                arr.push(x)
            }
            return $(arr)
        },
        print() {
            console.log(elements)
        },
        addClass(className) { //闭包
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return this
        },
        end() {
            return this.oldApi //this是当前api，old是旧api
        },
        oldApi: selectorOrArray.oldApi
    }
}