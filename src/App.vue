<template>
  <div id="app">
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto in fotos" :key="foto">
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
      fotos: [
        {
          url: 'https://images.unsplash.com/photo-1582133724133-3c8661ad6832?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          titulo: 'foto 1'
        },
        {
          url: 'https://images.unsplash.com/photo-1582156658814-74ec690e27a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=332&q=80',
          titulo: 'foto 1'
        }        
      ]
    }
  }
}
</script>

<style></style>
