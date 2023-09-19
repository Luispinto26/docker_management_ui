<template>
  <div id="app" class="min-h-screen flex flex-col">
    <AppHeader @update-server-ip="updateServerIpHandler" :containersCount="totalContainersInfo" :pingDuration="pingDuration" />
    <div class="flex-1">
      <div class="flex items-center flex-wrap gap-8 justify-center p-4 ">
          <Card v-for="(card, index) in cardsInfo" :key="index" :cardInfo="card" />
      </div>
    </div>
    <AppFooter/>
  </div>
</template>

<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import Card from './components/Card.vue';

import { getAllContainersInfo, pingServerResquest } from './api/containers';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
    Card
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
        console.log(this.cardsInfo)
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
        .then(() => {
          const endTime = performance.now();
          const pingDuration = endTime - startTime;
          this.pingDuration = `Ping: ${pingDuration.toFixed(2)} ms`
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

/* Define the styles for WebKit (Chrome, Safari, Opera) */
::-webkit-scrollbar {
  width: 8px; /* Width of the scrollbar */
  background-color: #3d405b;
}

::-webkit-scrollbar-thumb {
  background-color: #fcd6a1; /* Color of the thumb (the draggable part) */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #ffe8c7; /* Color when hovered */
}

/* Define the styles for Firefox */
/* Firefox doesn't support scrollbar width customization directly */
/* So, we can only style the scrollbar thumb and track */
/* Use -moz-scrollbar for older versions of Firefox */
/* Firefox 64+ supports scrollbar-width property */
/* Uncomment the scrollbar-width property if using Firefox 64+ */
/*
* {
  scrollbar-width: thin;
  scrollbar-color: #4caf50 #f1f1f1;
}

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: #4caf50;
  border-radius: 5px;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #45a049;
}
*/

/* Define the styles for Edge and IE */
/* Edge and IE support scrollbar width customization */
/* Uncomment these styles if needed */
/*
* {
  scrollbar-width: thin;
  scrollbar-color: #4caf50 #f1f1f1;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #4caf50;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #45a049;
}
*/

</style>
