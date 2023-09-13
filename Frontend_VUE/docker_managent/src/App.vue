<template>
  <div id="app" class="min-h-screen flex flex-col justify-between">
    <AppHeader @update-server-ip="updateServerIpHandler" :containersCount="totalContainersInfo" :pingDuration="pingDuration" />
    <div class="flex items-center flex-wrap gap-8 w-[85%] mx-auto">
      <Card v-for="(card, index) in cardsInfo" :key="index" :cardInfo="card" />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import Card from './components/Card.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { getAllContainersInfo, pingServerResquest } from './api/containers';

export default {
  name: 'App',

  components: {
    Card,
    AppHeader,
    AppFooter
  },
  data() {
    return {
      serverIp: '192.168.1.103',
      cardsInfo: [],
      totalContainersInfo: {},
      pingDuration: ''
    }
  },
  created() {
    getAllContainersInfo()
      .then(response => {
        console.log(response.data)
        this.totalContainersInfo = response.data.containersCountInfo
        this.cardsInfo = response.data.ContainersList;
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      })
    this.pingServer();
    this.pingInterval = setInterval(() => {
      this.pingServer();
    }, 1000);
  },
  mounted() {

  },
  beforeUnmount() {
    clearInterval(this.pingInterval);
  },
  methods: {
    updateServerIpHandler(ip) {
      this.serverIp = ip;
    },
    pingServer() {
      const startTime = performance.now();
      pingServerResquest()
        .then(response => {
          console.log(response)
          const endTime = performance.now();
          const pingDuration = endTime - startTime;
          this.pingDuration = `Ping duration: ${pingDuration.toFixed(2)} ms`
          console.log(`Ping duration: ${pingDuration.toFixed(2)} ms`);
        })
        .catch(error => {
          this.pingDuration = null
          console.error('Error:', error);
        });
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
