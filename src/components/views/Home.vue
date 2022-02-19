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
          :indicador="vacanciesLength"
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
    vacanciesLength: 0,
    vagas: [
      {
        title: "Analista Programador PHP Pleno",
        description:
          "Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.",
        salary: 6000,
        modality: "Home Office",
        type: "PJ",
        datePublished: "2021-10-10",
      },
      {
        title: "Programador JavaScript Angular",
        description:
          "Profissional com conhecimentos avançados em JavaScript e Angular.",
        salary: 5000,
        modality: "Presencial",
        type: "CLT",
        datePublished: "2021-10-07",
      },
      {
        title: "Programador JavaScript Vue",
        description:
          "Profissional com conhecimentos avançados em JavaScript e Vue.",
        salary: 5000,
        modality: "Home Office",
        type: "CLT",
        datePublished: "2021-10-06",
      },
      {
        title: "Analista de Banco de Dados Sênior",
        description:
          "Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL",
        salary: 9000,
        modality: "Presencial",
        type: "PJ",
        datePublished: "2021-10-06",
      },
      {
        title: "Programador Web Júnior",
        description:
          "Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL",
        salary: 3000,
        modality: "Presencial",
        type: "CLT",
        datePublished: "2021-10-05",
      },
    ],
  }),

  methods: {
    getUsersOnline() {
      this.usersOnline = Math.floor(Math.random() * 101);
    },
    getVacanciesLength() {
      this.vacanciesLength = this.vagas.length;
    },
  },

  created() {
    setInterval(this.getUsersOnline, 4000);
    this.getVacanciesLength();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
