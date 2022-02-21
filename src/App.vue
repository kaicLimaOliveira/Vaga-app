<template>
  <TopoPadrao @navigation="component = $event" />
  <VagasFavoritas />
  <Conteudo v-if="visibility" :content="component" />
  
</template>

<script>
import Conteudo from "@/components/layout/Conteudo.vue";
import TopoPadrao from "@/components/layout/TopoPadrao.vue";
import VagasFavoritas from "@/components/common/VagasFavoritas.vue";

export default {
  name: "App",
  components: {
    Conteudo,
    TopoPadrao,
    VagasFavoritas
  },
  data: () => ({
    component: 'Home',
    visibility: true
  }),
};
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 500px;
}
</style>
