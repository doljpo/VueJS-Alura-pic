<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <input
      class="filtro"
      type="search"
      placeholder="filtre por parte do título"
      @input="filtro = $event.target.value"
    />
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemReponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemReponsiva
  },

  name: "app",
  data() {
    return {
      titulo: "Alura pic",
      fotos: [],
      filtro: ""
    };
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
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

<style scoped>

.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>