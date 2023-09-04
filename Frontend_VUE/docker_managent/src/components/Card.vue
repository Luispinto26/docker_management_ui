<template>
  <div class="card flex flex-col min-h-0">
    <div class="card-header">
      <div class="text-sm font-light">
        <p><span class="font-bold">Uptime:</span> {{ status.value }} {{ status.unit }}</p>
        <p><span class="font-bold">IP:</span> {{ ip && port ? ip + ':' + port : '' }}</p>
      </div>
      <div class="settings">
        <button class="settings-button" @click="openModal">
          <img src="../assets/images/settings_gear.svg" alt="">
        </button>
      </div>
      <span class="relative flex h-3 w-3 z-10">
        <span class="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span class="relative rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </div>
    <h1 class="text-xl text-white py-1 h-fit">{{ name }}</h1>
    <div class="img-container">
      <img class="container-img" v-if="selectedImage" :src="selectedImage" alt="">
      <img class="container-img" v-else src="../assets/images/placeholder_image.png" alt="">
    </div>
    <div class="footer">
      <button class="power-options-buttons bg-[#f2cc8f] hover:bg-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
          <path
            d="M9 12l-4.463 4.969-4.537-4.969h3c0-4.97 4.03-9 9-9 2.395 0 4.565.942 6.179 2.468l-2.004 2.231c-1.081-1.05-2.553-1.699-4.175-1.699-3.309 0-6 2.691-6 6h3zm10.463-4.969l-4.463 4.969h3c0 3.309-2.691 6-6 6-1.623 0-3.094-.65-4.175-1.699l-2.004 2.231c1.613 1.526 3.784 2.468 6.179 2.468 4.97 0 9-4.03 9-9h3l-4.537-4.969z" />
        </svg>
      </button>
      <button class="power-options-buttons bg-[#e07a5f] hover:bg-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
          <path d="M2 2h20v20h-20z" />
        </svg>
      </button>
      <button class="power-options-buttons bg-green-400 hover:bg-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
          <path d="M3 22v-20l18 10-18 10z" />
        </svg>
      </button>
    </div>
  </div>

  <ModalComponent v-if="isModalVisible" :cardIp="ip" :cardPort="port" :cardName="name" :cardImage="selectedImage"
    @close="closeModal" @save-settings="updateData" />
</template>

<script>
import ModalComponent from "./Modal.vue"

export default {
  name: 'CardComponent',
  components: {
    ModalComponent
  },
  data() {
    return {
      port: '1000',
      name: 'Container Name',
      status: {
        value: 3,
        unit: 'hours'
      },
      selectedImage: null,
      isModalVisible: false, // Add this property to control modal visibility
    };
  },

  computed: {
    ip() {
      return this.$root.$data.serverIp;
    }
  },

  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    // Update the data when the event is received
    updateData(updatedData) {
      this.ip = updatedData.ip;
      this.port = updatedData.port;
      this.name = updatedData.name;
      this.selectedImage = updatedData.selectedImage;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.settings-button {
  @apply p-1 rounded-md bg-[#ffe8c7] hover:bg-gray-300 focus:outline-none;
}

.power-options-buttons {
  @apply rounded-md focus:outline-none w-7 h-7 flex items-center justify-center;
}

.card {
  @apply shadow-md shadow-[#212231] overflow-hidden rounded-md bg-[#212231] w-[240px] h-[320px];
}

.card-header {
  @apply flex justify-center items-center gap-2 p-2 bg-[#12131b] text-white
}

.img-container {
  @apply flex-1 flex items-center justify-center min-h-0;
}

.container-img {
  @apply object-cover w-full h-full;
}

.footer {
  @apply bg-[#12131b] flex flex-row gap-x-2 p-1 justify-end px-2.5 py-1.5;
}

</style>
