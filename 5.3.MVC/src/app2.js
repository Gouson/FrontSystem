import $ from "jquery"
import './app2.css'
import Model from "./base/Model.js"
const eventBus = $(window)
const localKey = 'app2.index'
const m = new Model({
    data: {
        index: parseInt(localStorage.getItem(localKey)) || 0
    },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem(localKey, m.data.index)
    }
})
const v = {

}
const c = {
    el: null,
    html: (index) => {
        return `
    <div>
    <ol class="tab-bar">
        <li class=${index===0?'selected':'none'}    data-index='0'>1</li>
        <li class=${index===1?'selected':'none'}     data-index='1'>2</li>
    </ol>
    <ol class="tab-content">
        <li class=${index===0?'active':' '}>内容1</li>
        <li class=${index===1?'active':' '}>内容2</li>
    </ol>
    </div>
    `
    },
    render(index) {
        if (c.el.children.length !== 0) c.el.empty()
        $(c.html(index)).appendTo(c.el)
    },
    init(container) {
        c.el = $(container)
        c.render(m.data.index) //view= render(data)
        c.autoBindEvents()
        eventBus.on('m:updated', () => {
            c.render(m.data.index)
        })
    },
    events: {
        'click .tab-bar li': 'x'
    },
    x(e) {
        const index = parseInt(e.currentTarget.dataset.index)
        m.update({
            index
        })
    },
    autoBindEvents() {
        for (let key in c.events) {
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex + 1)
            const value = c[c.events[key]]
            c.el.on(part1, part2, value)
        }
    }
}
export default c