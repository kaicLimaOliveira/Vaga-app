<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
      <div class="row">
        <div class="col d-flex justify-content-between flex-wrap">
          <div>
            {{ title }}
          </div>
          <div>
            <div class="form-check form-switch">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="favorite"
              />
              <label class="form-check-label">Favoritar</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <p>{{ description }}</p>
    </div>

    <div class="card-footer">
      <small class="text-muted">
        Sálario: R$ {{ salary }} | Modalidade: {{ getModality }} | Tipo:
        {{ getType }} | Publicação: {{ getDatePublished }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vaga",
  data: () => ({
    favorite: false,
  }),

  watch: {
    favorite(newValue) {
      if (newValue) {
        this.emitter.emit("favoriteVacancy", {
          title: this.title,
          description: this.description,
        });
      } else {
        this.emitter.emit("desfavoriteVacancy", {
          title: this.title,
          description: this.description,
        });
      }
    },
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    salary: {
      type: [Number, String],
      required: true,
    },
    modality: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    datePublished: {
      type: String,
      required: true,
    },
  },

  computed: {
    getModality() {
      switch (this.modality) {
        case "1":
          return "Home office";
        case "2":
          return "Presencial";
      }
      return "";
    },
    getType() {
      switch (this.type) {
        case "1":
          return "CLT";
        case "2":
          return "PJ";
      }
      return "";
    },
    getDatePublished() {
      let datePublished = new Date(this.datePublished);
      return datePublished.toLocaleDateString("pt-BR");
    },
  },
};
</script>

