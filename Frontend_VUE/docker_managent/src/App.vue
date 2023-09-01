<template>
  <div id="app" class="min-h-screen flex flex-col justify-between">
    <AppHeader @update-server-ip="updateServerIpHandler"/>
    <div class="justify-center flex items-center flex-wrap gap-4">
        <Card v-for="n in 5" :key="n"/>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import Card from './components/Card.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',

  components: {
    Card,
    AppHeader,
    AppFooter
  },
  data() {
    return {
      serverIp: '192.168.1.103'
    }
  },

  methods: {
    updateServerIpHandler(ip) {
      this.serverIp = ip;
    }
  } 
}
</script>

<style lang="postcss">

* {
  box-sizing: border-box;

}


#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #3d405b;
  /* background-image: linear-gradient(135deg, #aa3bb1, #582a7e); */

}

img {
  @apply pointer-events-none select-none;
}

button:disabled,
button[disabled] {
  user-select: none;
  opacity: 0.3;
  cursor: not-allowed;
  background: black;
}

</style>
