/* jQuery核心思想  闭包，链式操作 */
window.$ = window.jQuery = function(selectorOrArrayOrTemplate) {
    let elements
        /* 分三种情况判断参数 string 为selector，含有<的string为创建标签内容，数组为节点数组 */
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
    /* 创建元素 */
    function createElement(string) {
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.firstChild;
    }
    const api = Object.create(jQuery.prototype) //创建一个对象，对象的__proto__为jQuery.prototype
    Object.assign(api, {
        elements: elements,
        oldApi: selectorOrArrayOrTemplate.oldApi
    })
    return api
}

jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    jquery: true,
    get(index) {
        return this.elements[index]
    },
    appendTo(node) {
        if (node instanceof Element) {
            this.each(el => node.appendChild(el))
        } else if (node.jquery === true) {
            this.each(el => node.get(0).appendChild(el))
        }
    },
    append(children) {
        if (children instanceof Element) {
            this.get(0).appendChild(children)
        } else if (children instanceof HTMLCollection) {
            for (let i = 0; i < children.length; i++) {
                this.get(0).appendChild(children[i])
            }
        } else if (children.jquery === true) {
            children.each((node) => {
                this.get(0).appendChild(node)
            })
        }
    },
    find(selector) {
        let array = []
        for (let i = 0; i < this.elements.length; i++) {
            const elements2 = Array.from(this.elements[i].querySelectorAll(selector))
            array = array.concat(elements2)
        }
        array.oldApi = this
        return jQuery(array)
    },
    each(fn) {
        for (let i = 0; i < this.elements.length; i++) {
            fn.call(undefined, this.elements[i], i)
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
        return jQuery(array)
    },
    children() {
        const array = []
        this.each(node => {
            array.push(...node.children)
        })
        return jQuery(array)
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
        for (let i = 0; i < this.elements.length; i++) {
            let x = this.elements[i].nextSibling
            while (x && x.nodeType === 3) {
                x = x.nextSibling
            }
            arr.push(x)
        }
        return $(arr)
    },
    prev() {
        let arr = []
        for (let i = 0; i < this.elements.length; i++) {
            let x = this.elements[i].previousSibling
            while (x && x.nodeType === 3) {
                x = x.previousSibling
            }
            arr.push(x)
        }
        return $(arr)
    },
    print() {
        console.log(this.elements)
    },
    //闭包
    addClass(className) {
        this.each(node => {
            node.classList.add(className)
        })
        return this
    },
    end() {
        return this.oldApi
    },
    on(eventType, selector, fn) {
        this.each(node => {
            node.addEventListener(eventType, (e) => {
                let el = e.target;
                while (!el.matches(selector)) {
                    if (element === el) {
                        el = null;
                        break;
                    }
                    el = el.parentNode;
                }
                el && fn.call(el.e, el);
            });
        })
        return this
    }
}