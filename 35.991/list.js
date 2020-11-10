const createList = value => { //创建链表
    return createNode(value)
}
const appendNode = (list, value) => { //添加节点
    const node = createNode(value)
    let x = list
    while (x.next) {
        x = x.next
    }
    x.next = node
    return node
}
const removeFromList = (list, node) => { //移除节点
    let x = list
    let p = null
    while (x !== node) {
        p = x
        x = x.next
    }
    p.next = x.next
}
const travelList = (list, fn) => {
    let x = list
    while (x !== null) {
        fn(x)
        x = x.next
    }
}
const createNode = (value) => { //创建节点
    return {
        data: value,
        next: null
    }
}
const list = createList(10)
const node2 = appendNode(list, 20)
const node3 = appendNode(list, 30)
const node4 = appendNode(list, 40)
removeFromList(list, node3) //删除node3
travelList(list, (node) => { console.log(node) }) //遍历