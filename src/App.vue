<template>
  <div class="corpo">
    <alura-menu :rotas="routes"></alura-menu>
    <transition name="pagina">
     <router-view></router-view> 
    </transition>
  </div>
</template>

<script>

  import Menu from './components/shared/menu/Menu.vue'
  import {routes} from './routes.js'

  export default {

    components: {
      'alura-menu': Menu
    },

    data() {
      return {
        routes
      }
    }

  };
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  widows: 96%;
  margin: 0 auto;
}

.pagina-enter, .pagina-leave-active {
    opacity: 0;
}

.pagina-enter-active, .pagina-leave-active {
    transition: .4s;
}
</style>