<template>
  <AppHeader/>
  <Card msg="Welcome to Your Vue.js App"/>
  <!-- <div>
    <button @click="showModal">Open Modal</button>
    <Modal v-if="isModalVisible" @close="closeModal" />
  </div> -->
</template>

<script>
import Card from './components/Card.vue'
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    Card,
    AppHeader
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

button:disabled,
button[disabled]{
  user-select: none;
  opacity: 0.3;
  cursor: not-allowed;
  background: black;
}
</style>
