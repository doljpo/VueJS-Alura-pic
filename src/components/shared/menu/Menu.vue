<template>
    <nav>
      <li v-for="rota in rotas">
        <router-link :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
      </li>
    </nav>    
</template>

<script>
  export default {

    props: {
        rotas: {
            type: Array,
            required: true
        }
    }

  };
</script>

<style scoped>

</style>