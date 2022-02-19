<template>
  <div :class="style">
    <p>{{ titulo }}</p>
    <h2>{{ indicador }}</h2>
  </div>
</template>

<script>
export default {
  name: "Indicador",
  props: ["titulo", "indicador", "bg", "color"],
  computed: {
    style() {
      return `h-100 p-5 rounded-3 border ${this.bg} ${this.color}`;
    },
  },
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
