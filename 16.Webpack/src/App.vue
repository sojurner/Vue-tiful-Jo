<template>
  <div id="app">
    <message>Erro ther</message>
  </div>
</template>

<script>
import Message from './components/Message.vue';

export default {
  name: 'app',
  components: { Message },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<style lang="scss">
</style>
