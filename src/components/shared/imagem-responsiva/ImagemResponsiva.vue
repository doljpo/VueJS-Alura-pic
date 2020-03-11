<template>
  <img class="imagem-responsiva" :src="url" :alt="titulo" />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false
    },

    titulo: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
.imagem-responsiva {
  width: 100%;
}
</style>