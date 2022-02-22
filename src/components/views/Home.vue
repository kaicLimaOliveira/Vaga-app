<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga />
      </div>
    </div>

    <ListaVagas />

    <div class="row mt-5">
      <div class="col-4">
        <Indicador
          titulo="Vagas abertas"
          :indicador="openVacancy"
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
import ListaVagas from "@/components/common/ListaVagas.vue";

export default {
  name: "PesquisaVaga",
  components: {
    PesquisarVaga,
    Indicador,
    ListaVagas,
  },

  data: () => ({
    usersOnline: 0,
    openVacancy: 0,
  }),

  methods: {
    getUsersOnline() {
      this.usersOnline = Math.floor(Math.random() * 101);
    },
  },

  activated() {
    this.openVacancy = JSON.parse(localStorage.getItem("Vagas")).length;
  },
  created() {
    setInterval(this.getUsersOnline, 4000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
