// import Vue from 'vue'
// import App from './App.vue'
import Demo from './Demo'
const Vue = window.Vue
Vue.config.productionTip = false
Vue.component('demo2', {
  template: `<div>demo2</div>`
})
new Vue({
  template: `<div class="red">{{ n }}<button @click="add">+1</button>
    {{filterArray(array)}}
    <Gouson message="你好"/>
    <demo2/>
    <demo3/>
  </div>`,
  data() { //函数
    return {
      n: 0,
      array: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  },
  methods: {
    add() {
      this.n += 1;
    },
    filterArray(array) {
      return array.filter(i => i % 2 === 0)
    }
  },
  components: {
    Gouson: Demo,
    demo3: {
      template: `<div>我是组件3</div>`
    }
  }
}).$mount('#app')