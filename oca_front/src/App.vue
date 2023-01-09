<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script>
  import store from '@/store/index';
  export default{
    name: 'App',
    components:{

  },
  created() {
        store.dispatch('getProdutos')
        .then()
        .catch((error) => console.error(error));
        store.dispatch('getCategorias')
        .then()
        .catch((error) => console.error(error));
        store.dispatch('getUser')
        .then()
        .catch((error) => console.error(error));
  },
}

</script>

<style>

</style>