<template>
  <div id="app" class="min-h-screen flex flex-col">
    <AppHeader
      @update-server-ip="updateServerIpHandler"
      :containersCount="totalContainersInfo"
      :pingDuration="pingDuration" />
    <div class="flex-1">
      <div class="flex items-center flex-wrap gap-8 justify-center p-4">
        <Card v-for="card in visibleCards" :key="card.name" :cardInfo="card" @card-update="cardUpdateHandler" />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import Card from "./components/Card.vue";

import { getAllContainersInfo, pingServerResquest } from "./api/containers";

export default {
  name: "App",

  components: {
    AppHeader,
    AppFooter,
    Card,
  },

  data() {
    return {
      serverIp: null,
      cardsInfo: [],
      totalContainersInfo: {},
      pingDuration: "",
    };
  },

  created() {
    getAllContainersInfo()
      .then((response) => {
        this.totalContainersInfo = response.data.containersCountInfo;
        this.cardsInfo = response.data.ContainersList;
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
    this.pingServer();
    this.pingInterval = setInterval(() => {
      this.pingServer();
    }, 20000);
  },

  computed: {
    visibleCards() {
      return this.cardsInfo.filter((cardInfo) => cardInfo.visible);
    },
  },

  beforeUnmount() {
    clearInterval(this.pingInterval);
  },

  methods: {
    cardUpdateHandler(updatedData) {
      let outdatedCard = this.cardsInfo.find((card) => card.name === updatedData.slug);
      outdatedCard.cardData.cardName = updatedData.cardName;
      outdatedCard.cardData.port = updatedData.port;
      outdatedCard.cardData.imageName = updatedData.imageName;
      outdatedCard.visible = updatedData.isVisible;
      outdatedCard.cardData.base64Image = updatedData.selectedImage;
    },

    updateServerIpHandler(ip) {
      this.serverIp = ip;
    },
    pingServer() {
      const startTime = performance.now();
      pingServerResquest()
        .then(() => {
          const endTime = performance.now();
          const pingDuration = endTime - startTime;
          this.pingDuration = `Ping: ${pingDuration.toFixed(2)} ms`;
        })
        .catch((error) => {
          this.pingDuration = null;
          console.error("Error:", error);
        });
    },
  },
};
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
</style>
