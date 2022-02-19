<template>
  <button @click="conteudo = 'Home'">Home</button>
  <button @click="conteudo = 'PublicarVaga'">Publicar Vaga</button>

  <keep-alive>
    <component :is="conteudo" />
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
  data: () => ({
    conteudo: "Home",
  }),

  // beforeCreate() {
  //   console.log("antes de criar");
  // },
  // created() {
  //   console.log("criado", this.teste);
  // },
  // beforeMount() {
  //   console.log("antes de montar");
  // },
  // mounted() {
  //   console.log("Montado");
  // },

  // beforeUpdate() {
  //   console.log("Antes de atualizar");
  // },
  // updated() {
  //   console.log("Atualizado");
  // },
  // beforeUnmount() {
  //   console.log("Antes de demonstrar");
  // },
  // unmounted() {
  //   console.log("Destruido");
  // },
  // errorCaptured() {
  //   console.log("Erro capturado");
  // },
  // renderTracked() {
  //   console.log("Re-renderização rastreada");
  // },
  // renderTriggered() {
  //   console.log("Re-renderização acionada");
  // },
  // activated() {
  //   console.log("Ativado");
  // },
  // deactivated() {
  //   console.log("Desativado");
  // },
};
</script>

<style scoped lang="scss">
</style>
