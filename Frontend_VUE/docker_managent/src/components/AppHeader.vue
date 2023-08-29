<template>
    <header class="text-white p-4 flex justify-between">
            <img src="../assets/images/logo.png" class="logo w-40 h-fit">

            <div class="flex items-center space-x-4">
                <!-- Input for Server IP -->
                <!-- <input v-model="serverIp" placeholder="Server IP"
                    class="rounded-lg p-2 bg-gray-200 text-gray-800 focus:outline-none focus:ring focus:border-blue-300" /> -->

                <!-- Button to Auto Scan Containers -->
                <button @click="autoScanContainers" class="bg-[#f2cc8f] hover:bg-[#f8d69e] text-white rounded-lg px-4 py-4 flex gap-x-2">
                    <div class="bg-[#e07a5f] rounded-lg w-14 h-14 flex items-center justify-center p-2 relative">
                        <div class="h-2 w-2 bg-green-400 rounded-full absolute top-1.5 right-1.5"></div>
                        <img src="../assets/images/server_icon.svg" alt="" class="w-full">
                    </div>
                    <div class="text-gray-900">
                        <p class="font-semibold text-left">Server IP</p>
                        <p class="text-xs text-left">192.168.1.103</p>
                        <p class="text-xs text-left">Online Ping: 123 ms</p>
                    </div>
                    <img src="../assets/images/settings_gear.svg" alt="" class="relative bottom-2 left-2">
                </button>

                <!-- Button to Add a New Container -->
                <button @click="addNewContainer" class="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2">
                    Add a New Container
                </button>
                <!-- Server Connection State -->
            <div class="text-lg font-semibold">
                Server Connection: {{ serverConnectionState }}
            </div>
            </div>

    </header>
</template>
  
<script>
export default {
    // ... (same as before)
};
</script>
  
<style scoped>
/* No need to include custom styles here, as Tailwind CSS classes are used above */
</style>
  