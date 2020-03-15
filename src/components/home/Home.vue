<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input
      class="filtro"
      type="search"
      placeholder="filtre por parte do título"
      @input="filtro = $event.target.value"
      v-meu-transform.animate="90"
    />
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro" :key="foto._id">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva
            :url="foto.url"
            :titulo="foto.titulo"
            v-meu-transform:scale.animate="1.2"
          />
          <meu-botao
            rotulo="remover"
            tipo="button"
            @acaoRemover="remover(foto)"
            :confirmacao="true"
            estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemReponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemReponsiva,
    "meu-botao": Botao
  },

  name: "app",
  data() {
    return {
      titulo: "Alura pic",
      fotos: [],
      filtro: "",
      mensagem: ""
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
  },

  methods: {
    remover(foto) {
      this.$http.delete(`http://localhost:3000/v1/fotos/${foto._id}`).then(
        () => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = "Foto removida com sucesso!";
        },
        err => {
          console.log(err);
          this.mensagem = err;
        }
      );
    }
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