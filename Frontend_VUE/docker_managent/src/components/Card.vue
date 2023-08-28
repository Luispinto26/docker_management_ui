<template>
  <div class="justify-center flex items-center h-screen">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="row flex flex-row">
      <div
        class="cards-wrapper">
        <div class="card-header">
          <div class="text-sm font-light">
            <p><span class="font-bold">Uptime:</span> {{status.value}} {{status.unit}}</p>
            <p><span class="font-bold">IP:</span> {{ ip && port ? ip + ':' + port : ''}}</p>
          </div>
          <div class="settings">
            <button class="settings-button" @click="openModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
              </svg>
            </button>
          </div>
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
        <div class="flex-1 flex flex-col justify-center">
          <h1 class="text-xl text-white py-2">{{name}}</h1>
          <div class="img-container">
            <img class="container-img" src="../assets/images/portainer.png" alt="">
          </div>
        </div>
        <div class="footer">
          <button class="settings-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 12l-4.463 4.969-4.537-4.969h3c0-4.97 4.03-9 9-9 2.395 0 4.565.942 6.179 2.468l-2.004 2.231c-1.081-1.05-2.553-1.699-4.175-1.699-3.309 0-6 2.691-6 6h3zm10.463-4.969l-4.463 4.969h3c0 3.309-2.691 6-6 6-1.623 0-3.094-.65-4.175-1.699l-2.004 2.231c1.613 1.526 3.784 2.468 6.179 2.468 4.97 0 9-4.03 9-9h3l-4.537-4.969z"/></svg>
          </button>
          <button class="settings-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 2h20v20h-20z"/></svg>
          </button>
          <button class="settings-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <ModalComponent v-if="isModalVisible"
      :cardIp="ip"
      :cardPort="port"
      :cardName="name"
      @close="closeModal"
      @save-settings="updateData"
   />
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
      ip: '', // Initialize with default values
      port: '',
      name: '',
      status: {
        value: 3,
        unit: 'hours'
      },
      selectedImage: null,
      isModalVisible: false, // Add this property to control modal visibility
    };
  },
  props: {
    msg: String
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
  @apply p-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none;
}

.cards-wrapper {
  box-shadow: 0 5px 15px rgba(19, 4, 32, 0.7);
  background-image: linear-gradient(rgb(56, 56, 56) 0%, rgb(31, 31, 31) 5%, rgb(22, 22, 22) 100%);
  @apply shadow-2xl border-solid border-2 border-white overflow-hidden rounded-md bg-neutral-800 w-[240px] h-[320px] flex flex-col;
}

.card-header {
  @apply flex justify-center items-center gap-2 p-2 bg-zinc-700 text-white
}

.img-container {
  @apply flex-1 flex items-center justify-center;
}

.container-img{
  width: 80%;
}

.footer{
  @apply bg-zinc-700 flex flex-row gap-x-2 p-1 justify-center;
}
</style>
