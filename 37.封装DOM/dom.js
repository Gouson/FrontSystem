window.dom = {
    create(string) {
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    after(node1, node2) {
        node1.parentNode.insertBefore(node2, node1.nextSibling)
    },
    before(node1, node2) {
        node1.parentNode.insertBefore(node2, node1)
    },
    append(parent, node) {
        parent.appendChild(node)
    },
    wrap(node, parent) {
        dom.defore(node, parent)
        dom.append(parent, node)
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        console.log(node)
        let array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x.node.firstChild
        }
        return array
    }
};