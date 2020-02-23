<template>
  <div class="corpo" id="app">
    <h1 class="centralizado">{{ titulo }}</h1>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotos">
        <meu-painel :titulo="foto.titulo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
  import Painel from './components/shared/painel/Painel.vue';

  export default {
    components: {
      'meu-painel': Painel
    },

    name: "app",
    data() {
      return {
        titulo: "Alura pic",
        fotos: []
      };
    },

    created() {
      this.$http
        .get("http://localhost:3000/v1/fotos")
        .then(res => res.json())
        .then(
          fotosApi => (this.fotos = fotosApi),
          err => console.log(err)
        );
    }
  };
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    widows: 96%;
    margin: 0 auto;
  }

  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }
</style>