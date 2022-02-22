<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Pesquisar Vagas</h2>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="">Titulo da vaga</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Pesquise por palavras chaves"
                  v-model="title"
                />
                <small class="form-text text-muted"
                  >Informe palavras que estejam relacionadas com a vaga que você
                  procura
                </small>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button
                class="btn btn-outline-dark mt-2"
                @click="filterVacancy()"
                type="button"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicarVaga",
  data: () => ({
    title: "",
  }),
  methods: {
    filterVacancy() {
      this.emitter.emit("filterVacancy", { title: this.title });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
