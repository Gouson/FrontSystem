// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false
import Demo from './Demo.vue'

// runtime非完整版模式
new Vue({
    el: "#app",
    render(h) {
        return h(Demo)
    }
})