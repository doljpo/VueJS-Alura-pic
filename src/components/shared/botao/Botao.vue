<template>
  <button class="botao" :class="estiloDoBotao" :type="tipo" @click="executarAcao()">{{ rotulo }}</button>
</template>

<script>
export default {
  props: {
    tipo: {
      type: String,
      required: true,
      default: "button"
    },
    rotulo: {
      type: String,
      required: false,
      default: "foto"
    },
    confirmacao: {
      type: Boolean,
      required: false,
      default: true
    },
    estilo: {
      type: String,
      required: false,
      default: "padrao"
    }
  },

  computed: {
    estiloDoBotao() {
      if (this.estilo == "padrao") return "botao botao-padrao";
      if (this.estilo == "perigo") return "botao botao-perigo";
    }
  },

  methods: {
    executarAcao() {
      if (this.confirmacao) {
        if (confirm("Deseja remover a foto?")) {
          this.$emit("acaoRemover");
        }

        return;
      }

      this.$emit("acaoRemover");
    }
  }
};
</script>

<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>