import EventBus from "./EventBus"

class Model extends EventBus {
    constructor(options) {
        super()
        const keys = ['data', 'update', 'create', 'delete', 'get']
        keys.forEach((key) => {
            if (key in options) {
                this[key] = options[key]
            }
        })
    }
    create() {
        // 可选链
        // console?.error?.(`还没实现create`)
        console && console.error && console.error(`还没实现create`)
    }
    delete() {
        console && console.error && console.error(`还没实现delete`)
    }
    update() {
        console && console.error && console.error(`还没实现update`)
    }
    get() {
        console && console.error && console.error(`还没实现get`)
    }
}

export default Model