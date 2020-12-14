<template>
  <div>
    <input type="radio" id="one" value="v-a" v-model="view" />
    <label for="one">A</label>
    <br />
    <input type="radio" id="two" value="v-b" v-model="view" />
    <label for="two">B</label>
    <br />
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    "v-a": {
      template: "<div>Component A</div>",
    },
    "v-b": {
      template: "<div>Component B</div>",
    },
  },
  data() {
    return {
      view: "v-a",
    };
  },
};
</script>

<style lang="scss">
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
