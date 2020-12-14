<template>
  <div class="example-4">
    <transition name="fade" mode="out-in">
      <button v-if="status === true" @click="status = false" key="on">
        on
      </button>
      <button v-else @click="status = true" key="off">off</button>
    </transition>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      status: true,
    };
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all .5s;
}
.fade-enter {
  opacity: 0;
  transform: translateX(50px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
.example-4{
  padding: 300px;
}
button {
  width: 100px;
  height: 50px;
  border: 1px #666 solid;
  border-radius: 10px;
  background: #fff;
}
button:focus {
  outline: 0;
}
button:hover {
  cursor: pointer;
}
</style>
