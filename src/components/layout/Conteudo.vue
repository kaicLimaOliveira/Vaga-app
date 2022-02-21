<template>
  <keep-alive>
    <component :is="contentValue" />
  </keep-alive>
</template>

<script>
import Home from "@/components/views/Home.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";

export default {
  name: "Conteudo",
  components: {
    Home,
    PublicarVaga,
  },
  props: {
    content: {
      type: String,
      required: true
    }
  },

  computed: {
    contentValue() {
      switch (this.content) {
        case 'Home': return this.conteudo = 'Home'
        case 'PublicarVaga': return this.conteudo = 'PublicarVaga'
      }
      return ''
    }
  }
};
</script>

<style scoped lang="scss">
</style>
