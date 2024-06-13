<template>
    <div class="fixed inset-0 flex justify-center items-center z-50">
        <div class="modal-container bg-white rounded-lg p-6 shadow-lg absolute z-50">
            <h2 class="text-2xl font-semibold mb-4">Container Settings</h2>
            <div class="mb-4 flex flex-row justify-center items-center">
                <div>
                    <label for="port" class="block text-sm font-semibold">Protocol</label>
                    <select name="protocol" id="protocol" v-model="selectedProtocol">
                        <option value="http://">http://</option>
                        <option value="https://">https://</option>
                    </select>
                </div>
                <div class="w-full mr-2">
                    <label for="ip" class="block text-sm font-semibold">IP Address</label>
                    <!-- <input type="text" v-model="ip" id="ip" class="mt-1 p-2 border rounded-lg w-full"> -->
                    <p>{{ cardIp }}</p>
                </div>
                <div>
                    <label for="port" class="block text-sm font-semibold">Port</label>
                    <input type="text" v-model="port" id="port" class="mt-1 p-2 border rounded-lg w-20">
                </div>
            </div>
            <div class="mb-4">
                <label for="name" class="block text-sm font-semibold">Card Name</label>
                <input type="text" v-model="name" id="name" class="mt-1 p-2 border rounded-lg w-full">
            </div>
            <div class="mb-4">
                <label for="name" class="block text-sm font-semibold">Name for Fetch Image API</label>
                <a class="underline text-xs" href="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons@latest/png/"
                    target="_blank">Click Here to find container name on image list</a>
                <input type="text" v-model="imageName" id="name" class="mt-1 p-2 border rounded-lg w-full">
            </div>
            <div class="mb-4">
                <label for="image" class="block text-sm font-semibold">Upload Button Image</label>
                <input type="file" @change="handleImageUpload" id="image" class="mt-5">
            </div>
            <div class="flex justify-center mt-10 gap-x-2 items-center">
                <div class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" v-model="isVisible" id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                    <label for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
                <label for="toggle" class="text-md text-gray-700">Visible</label>

                <button @click="closeModal" class="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg">
                    Close
                </button>
                <button class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg" :disabled="!isFormFullfield"
                    @click="saveChanges">Save Settings</button>
            </div>
        </div>
        <div class="modal-overlay" @click="closeModal"></div>
    </div>
</template>
  
<script>


export default {
    name: 'ModalComponent',
    emits: ['close', 'save-settings'], // Declare any other emitted events here

    props: {
        cardProtocol: {
            type: String,
            default: ''
        },
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
        cardImageName: {
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
            port: this.cardPort,
            name: this.cardName,
            imageName: this.cardImageName,
            selectedImage: this.cardImage,
            isVisible: true,
            selectedProtocol: this.cardProtocol
        };
    },

    computed: {
        isFormFullfield() {
            return !!this.port && !!this.name;
        }
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0];

            if (!file) return; // No file selected, do nothing

            const reader = new FileReader();

            reader.onload = (e) => {
                const image = new Image();
                image.onload = () => {
                    if (image.width <= 1024 && image.height <= 1024) {
                        // Image is valid, do something with it
                        const base64String = reader.result;
                        this.selectedImage = base64String;
                    } else {
                        // Image is too large, show an error message or handle it accordingly
                        alert('Please upload an image no larger than 300px by 300px.');
                    }
                };
                image.src = e.target.result;
            };

            reader.readAsDataURL(file);
        },
        closeModal() {
            this.$emit('close');
        },
        hideItem() {
            // Implement your delete logic here
            this.closeModal();
        },
        async saveChanges() {
            const cardData = {
                port: this.port,
                isVisible: this.isVisible,
                imageName: this.imageName,
                cardName: this.name,
                selectedImage: this.selectedImage !== this.cardImage ? this.selectedImage : null,
                selectedProtocol: this.selectedProtocol
            }

            // Emit an event with the updated data
            this.$emit('save-settings', cardData)
            // Close modal after successful save
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

.toggle-checkbox:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #68D391;
}

.toggle-checkbox:checked+.toggle-label {
    @apply: bg-green-400;
    background-color: #68D391;
}
</style>
  