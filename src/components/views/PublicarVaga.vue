<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente sua vaga para milhares de profissionais e de graça</h4>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Título da Vaga</label>
        <input type="text" class="form-control" v-model="title" />
        <div class="form-text">
          Por exemplo: Programador, JavaScript ou Python
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Descrição</label>
        <textarea
          type="text"
          class="form-control"
          maxlength="300"
          v-model="description"
        ></textarea>
        <div class="form-text">Informe os detalhes da vaga.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Salário</label>
        <input type="number" class="form-control" v-model="salary" />
        <div class="form-text">Informe o salário.</div>
      </div>

      <div class="col">
        <label class="form-label">Modalidade</label>
        <select class="form-select" v-model="modality">
          <option value="" disabled>--Selecione</option>
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">
          Informe onde as atividades serão realizadas.
        </div>
      </div>

      <div class="col">
        <label class="form-label">Tipo</label>
        <select class="form-select" v-model="type">
          <option value="" disabled>--Selecione</option>
          <option value="1">CLT</option>
          <option value="1">PJ</option>
        </select>
        <div class="form-text">Informe o tipo de contratação.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <button type="submit" @click="saveVacancy()" class="btn btn-primary">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicarVaga",
  data: () => ({
    title: "",
    description: "",
    salary: "",
    modality: "",
    type: "",
    datePublished: "",
  }),
  methods: {
    saveVacancy() {
      let newDate = Date.now()
      let datePublished = new Date(newDate)

      let vacancy = JSON.parse(localStorage.getItem("Vagas"));

      if (!vacancy) vacancy = [];

      vacancy.push({
        title: this.title,
        description: this.description,
        salary: this.salary,
        modality: this.modality,
        type: this.type,
        datePublished: datePublished
      });


      localStorage.setItem("Vagas", JSON.stringify(vacancy));

      this.resetForm()

      this.$swal({
        icon: 'success',
        title: 'Registro com sucesso',
        text: 'Vaga registrada com sucesso'
      })
    },
    resetForm() {
      this.title = ""
      this.description = ""
      this.salary = ""
      this.modality = ""
      this.type = ""
      this.datePublished = ""
    }
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
