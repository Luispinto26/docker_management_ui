<template>
    <div class="fixed inset-0 flex justify-center items-center z-50">
        <div class="modal-container bg-white rounded-lg p-6 shadow-lg">
            <span class="modal-close absolute top-0 right-0 m-4 text-gray-600 cursor-pointer" @click="closeModal">
                &times;
            </span>
            <h2 class="text-2xl font-semibold mb-4">Container Settings</h2>
            <div class="mb-4 flex flex-row justify-center items-center">
                <div class="w-full mr-2">
                    <label for="ip" class="block text-sm font-semibold">IP Address</label>
                    <input type="text" v-model="ip" id="ip" placeholder="192.168.1.103"
                        class="mt-1 p-2 border rounded-lg w-full">
                </div>
                <div>
                    <label for="port" class="block text-sm font-semibold">Port</label>
                    <input type="text" v-model="port" id="port" class="mt-1 p-2 border rounded-lg w-20">
                </div>
            </div>
            <div class="mb-4">
                <label for="name" class="block text-sm font-semibold">Name</label>
                <input type="text" v-model="name" id="name" class="mt-1 p-2 border rounded-lg w-full">
            </div>
            <div class="mb-4">
                <label for="image" class="block text-sm font-semibold">Upload Button Image</label>
                <input type="file" @change="handleImageUpload" id="image" class="mt-5">
            </div>
            <div class="flex justify-center mt-10">
                <button class="mr-2 px-4 py-2 bg-red-500 text-white rounded-lg" @click="deleteItem">Delete
                    Button</button>
                <button class="px-4 py-2 bg-blue-500 text-white rounded-lg" @click="saveChanges">Save Settings</button>
            </div>
        </div>
    </div>
    <div class="modal-overlay fixed inset-0 bg-black opacity-75"></div>
</template>
  
<script>
export default {
    name: 'ModalComponent',
    emits: ['close'], // Declare any other emitted events here
    data() {
        return {
            ip: '',
            port: '',
            name: '',
            selectedImage: null,
        };
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        handleImageUpload(event) {
            this.selectedImage = event.target.files[0];
        },
        deleteItem() {
            // Implement your delete logic here
            this.closeModal();
        },
        saveChanges() {
            const formData = new FormData();
            formData.append('ip', this.ip);
            formData.append('port', this.port);
            formData.append('name', this.name);
            formData.append('image', this.selectedImage);

            // Implement your save logic here with the formData
            this.closeModal();
        }
    }
};
</script>
  
<style scoped>
.modal-overlay {
    transition: opacity 0.3s;
}

.modal-container {
    max-width: 400px;
    width: 90%;
}

.modal-close {
    font-size: 1.25rem;
}
</style>
  