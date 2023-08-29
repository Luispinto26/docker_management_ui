<template>
    <div class="fixed inset-0 flex justify-center items-center z-50">
        <div class="modal-container bg-white rounded-lg p-6 shadow-lg absolute z-50">
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
            <div class="flex justify-center mt-10 gap-x-2">
                <button class="px-4 py-2 bg-orange-500 text-white rounded-lg" @click="deleteItem">Delete
                    Button</button>
                    <button @click="closeModal"
                    class="px-4 py-2 text-white bg-red-600 rounded-lg">
                    Close
                </button>
                <button class="px-4 py-2 bg-green-500 text-white rounded-lg" :disabled="!isFormFullfield"
                    @click="saveChanges">Save Settings</button>
            </div>
        </div>
        <div class="modal-overlay" @click="closeModal"></div>
    </div>
</template>
  
<script>
export default {
    name: 'ModalComponent',
    emits: ['close'], // Declare any other emitted events here

    props: {
        cardIp: {
            type: String,
            default: ''
        },
        cardPort: {
            type: String,
            default: ''
        },
        cardName: {
            type: String,
            default: ''
        },
        cardImage: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            ip: this.cardIp,
            port: this.cardPort,
            name: this.cardName,
            selectedImage: this.cardImage,
        };
    },

    computed: {
        isFormFullfield() {
            return !!this.ip && !!this.port && !!this.name;
        }
    },
    methods: {
        handleImageUpload(event) {
        // Handle the file input change and save the selected image file
        this.selectedImage = event.target.files[0];
        },
        closeModal() {
            this.$emit('close');
        },
        deleteItem() {
            // Implement your delete logic here
            this.closeModal();
        },
        saveChanges() {

            // Create an object containing the updated data
            const updatedData = {
                ip: this.ip,
                port: this.port,
                name: this.name,
                selectedImage: this.selectedImage
            }


            // Emit an event with the updated data
            this.$emit('save-settings', updatedData)

            // Implement your save logic here with the formData
            this.closeModal();
        }
    }
};
</script>
  
<style scoped lang="postcss">
.modal-overlay {
    transition: opacity 0.3s;
    @apply bg-black opacity-75 w-full h-full;
}

.modal-container {
    max-width: 400px;
    width: 90%;
}

.modal-close {
    font-size: 2rem;
}
</style>
  