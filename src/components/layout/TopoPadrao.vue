<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Vagas</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="navFrom('Home')">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="navFrom('PublicarVaga')">Publicar vaga</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Home from "@/components/views/Home.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";

export default {
  name: "TopoPadrao",
  components: {
    Home,
    PublicarVaga,
  },
  methods: {
    navFrom(e) {
      this.$emit('navigation', e)
    }
  }
};
</script>

<style lang="scss">
</style>
