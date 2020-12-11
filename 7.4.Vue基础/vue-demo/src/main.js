import Vue from 'vue'
// import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import ANTD from './Antdesign.vue'
Vue.use(Antd)
Vue.config.productionTip = false
new Vue({
  el: "#app",
  render(h) {
    return h(ANTD)
  }
}).$mount('#app')