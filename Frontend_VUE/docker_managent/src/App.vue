<template>
  <Card msg="Welcome to Your Vue.js App"/>
  <!-- <div>
    <button @click="showModal">Open Modal</button>
    <Modal v-if="isModalVisible" @close="closeModal" />
  </div> -->
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  background-image: linear-gradient(135deg, #aa3bb1, #582a7e);
}
</style>
