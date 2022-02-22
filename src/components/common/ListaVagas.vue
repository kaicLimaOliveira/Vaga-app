<template>
  <slot :vacancys="vacancys">
    <div class="row mt-3">
      <div class="col-6 mt-4" v-for="(vacancy, index) in vacancys" :key="index">
        <Vagas v-bind="vacancy" />
      </div>
    </div>
  </slot>
</template>

<script>
import Vagas from "@/components/common/Vaga.vue";

export default {
  name: "ListaVagas",
  data: () => ({
    vacancys: [],
  }),
  components: {
    Vagas,
  },

  activated() {
    //Chamado uma única vez quando o componente é montado
    this.vacancys = JSON.parse(localStorage.getItem("Vagas"));
  },
  mounted() {
    this.emitter.on("filterVacancy", (vacancys) => {
      const vacancy = JSON.parse(localStorage.getItem("Vagas"));

      this.vacancys = vacancy.filter((v) =>
        v.title.toLowerCase().includes(vacancys.title.toLowerCase())
      );
    });
  },
};
</script>
