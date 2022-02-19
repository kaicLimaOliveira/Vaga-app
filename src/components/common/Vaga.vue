<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{ title }}</div>
    <div class="card-body">
      <p>{{ description }}</p>
    </div>

    <div class="card-footer">
      <small class="text-muted">
        Sálario: R$ {{ salary }} | Modalidade: Home office | Tipo: {{ type }} |
        Publicação: {{ datePublished }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vaga",
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
};
</script>
