<template>
  <div>
    demo
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  props: ["message"],
  data() {
    return {
      n: 0,
    };
  },
  methods: {
    add() {
      this.n += 1;
    },
  },
};
</script>
<style scoped>
.red {
  color: red;
}
</style>
