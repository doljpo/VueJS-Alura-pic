<template>
  <div id="app">
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto in fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titulo: 'Alura pic',
      fotos: []
    }
  },

  created () {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotosApi => this.fotos = fotosApi, err => console.log(err));
  }
}
</script>

<style></style>
