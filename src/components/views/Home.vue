<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga />
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-6 mt-4" v-for="(vaga, index) in vagas" :key="index">
        <Vagas v-bind="vaga" />
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-4">
        <Indicador
          titulo="Vagas abertas"
          :indicador="5"
          bg="bg-dark"
          color="text-white"
        />
      </div>

      <div class="col-4">
        <Indicador
          titulo="Profissionais cadastrados"
          :indicador="usersOnline * 2"
          bg="bg-dark"
          color="text-white"
        />
      </div>

      <div class="col-4">
        <Indicador
          titulo="Visitantes online"
          :indicador="usersOnline"
          bg="bg-light"
          color="text-dark"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Indicador from "@/components/common/Indicador.vue";
import PesquisarVaga from "@/components/common/PesquisarVaga.vue";
import Vagas from "@/components/common/Vaga.vue";

export default {
  name: "PesquisaVaga",
  components: {
    PesquisarVaga,
    Indicador,
    Vagas,
  },

  data: () => ({
    usersOnline: 0,
    vagas: [],
  }),

  methods: {
    getUsersOnline() {
      this.usersOnline = Math.floor(Math.random() * 101);
    },

  },

  created() {
    setInterval(this.getUsersOnline, 4000);
  },
  activated() { //Chamado uma única vez quando o componente é montado
    this.vagas = JSON.parse(localStorage.getItem('Vagas'))
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
