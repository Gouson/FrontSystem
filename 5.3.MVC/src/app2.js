import $ from "jquery"
import './app2.css'
const eventBus = $(window)
const localKey = 'app2.index'
const m = {
    data: {
        index: parseInt(localStorage.getItem(localKey)) || 0
    },
    create() {},
    delete() {},
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem(localKey, m.data.index)
    },
    get() {}
}
const v = {
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
    init(container) {
        v.el = $(container)
    },
    render(index) {
        if (v.el.children.length !== 0) v.el.empty()
        $(v.html(index)).appendTo(v.el)
    }
}
const c = {
    init(el) {
        v.init(el)
        v.render(m.data.index) //view= render(data)
        c.autoBindEvents()
        eventBus.on('m:updated', () => {
            v.render(m.data.index)
        })
    },
    events: {
        'click .tab-bar li': 'x'
    },
    x(e) {
        const index = parseInt(e.currentTarget.dataset.index)
        m.update({ index })
    },
    autoBindEvents() {
        for (let key in c.events) {
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex + 1)
            const value = c[c.events[key]]
            v.el.on(part1, part2, value)
        }
    }
}

// const $tabBar = $('#app2 .tab-bar')
// const $tabContent = $('#app2 .tab-content')

// $tabBar.on('click', 'li', (e) => {
//     const $li = $(e.currentTarget)
//     $li.addClass('selected').siblings().removeClass('selected')
//     const index = $li.index()
//     localStorage.setItem(localKey, index)
//     $tabContent.children().eq($(e.currentTarget).index()).addClass('active').siblings().removeClass('active')
// })

// $tabBar.children().eq(index).trigger('click')
export default c