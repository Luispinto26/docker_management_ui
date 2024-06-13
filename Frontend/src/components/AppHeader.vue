<template>
  <header class="text-white p-8 flex justify-between">
    <img src="../assets/images/logo.png" class="w-40 h-fit" />
    <div class="flex items-center space-x-4">
      <!-- Input for Server IP -->
      <div class="bg-[#f2cc8f] rounded-lg px-4 py-4 flex items-center gap-x-2">
        <div class="bg-[#e07a5f] rounded-lg w-14 h-14 flex items-center justify-center p-2 relative">
          <div
            class="h-2 w-2 rounded-full absolute top-1.5 right-1.5"
            :class="pingDuration ? 'bg-green-400' : 'bg-[#ff0000]'"></div>
          <img src="../assets/images/server_icon.svg" alt="" class="w-full" />
        </div>
        <div class="text-gray-900">
          <p class="font-semibold text-left leading-5">Server IP</p>
          <div class="flex">
            <input
              class="bg-[#ffe8c7] text-xs rounded-md px-1 w-28 py-0.5 focus:border-[#e07a5f]"
              v-model="serverIpInput"
              @blur="updateServerIp"
              @keyup.enter="$event.target.blur()" />
            <img src="../assets/images/edit_icon.svg" alt="" class="w-3 -ml-4" />
          </div>
          <p class="text-xs text-left w-32">{{ pingDuration }}</p>
        </div>
      </div>

      <!-- Button with number of containers active -->
      <div class="bg-[#f2cc8f] rounded-lg px-4 py-4 flex items-center gap-x-2">
        <div class="bg-[#e07a5f] rounded-lg w-14 h-14 flex justify-center p-2 relative">
          <img src="../assets/images/docker_icon.svg" alt="" class="w-full" />
        </div>
        <div class="text-gray-900">
          <p class="font-semibold text-left leading-4">{{ containersCount.active }} Active<br />Containers</p>
          <p class="text-xs text-left leading-3">{{ containersCount.hidden }} Hidden</p>
          <p class="text-xs text-left leading-3">{{ containersCount.exited }} Exited</p>
        </div>
      </div>

      <!-- New Card Button-->
      <!-- <button class="bg-green-400 hover:bg-green-500 rounded-lg px-4 py-4 gap-x-2 h-full flex items-center">
                <img src="../assets/images/plus_square_icon.svg" alt="" class="h-10 opacity-20">
                <p class="font-semibold leading-4 text-gray-900">Add New<br>Card</p>
            </button> -->

      <!-- <div class="relative h-full">
        <button
          class="bg-[#ffe8c7] hover:bg-[#fcd6a1] rounded-lg px-4 py-4 gap-x-2 h-full flex items-center"
          @click="startScan">
          <img :src="autoScanIcon" alt="" class="h-10" :class="isScanning ? 'button-rotate' : 'opacity-20'" />
          <p class="text-2xl font-semibold leading-5 text-gray-900">Auto<br />Scan</p>
        </button>
        <ContainerBox v-if="scanningFinished.length > 0" />
      </div> -->
    </div>
  </header>
</template>

<script>
// import ContainerBox from "./ContainerBox.vue";
import LoadingIcon from "../assets/images/loading_icon.svg";
import MagnifierIcon from "../assets/images/magnifier_icon.svg";
// import {autoScan} from '@/api/containers.js';

export default {
  name: "AppHeader",

  data() {
    return {
      serverIpInput: "",
      isScanning: false,
      scanningFinished: [],
    };
  },

  props: {
    containersCount: Object,
    pingDuration: String,
  },

  computed: {
    autoScanIcon() {
      return this.isScanning ? LoadingIcon : MagnifierIcon;
    },
  },

  components: {},

  emits: ["updateServerIp"],

  created() {
    this.serverIpInput = this.$root.$data.serverIp;
  },

  methods: {
    updateServerIp() {
      this.$emit("updateServerIp", this.serverIpInput);
    },
    startScan() {
      this.isScanning = !this.isScanning;
    },
    // async fetchSomeData() {
    //     try {
    //         const response = await autoScan();
    //         this.responseData = response.data;
    //         console.log('Data fetched:', this.responseData);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }
  },
};
</script>

<style scoped>
input:focus,
input:focus-visible {
  outline: #e07a5f solid 2px;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.button-rotate {
  animation: rotate 2s linear infinite;
}
</style>
