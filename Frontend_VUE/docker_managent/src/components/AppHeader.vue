<template>
    <header class="text-white p-8 flex justify-between">
        <img src="../assets/images/logo.png" class="w-40 h-fit">

        <div class="flex items-center space-x-4">
            <!-- Input for Server IP -->
            <!-- <input v-model="serverIp" placeholder="Server IP"
                    class="rounded-lg p-2 bg-gray-200 text-gray-800 focus:outline-none focus:ring focus:border-blue-300" /> -->

            <!-- Button to Auto Scan Containers -->
            <button @click="autoScanContainers" class="bg-[#f2cc8f] hover:bg-[#f8d69e] rounded-lg px-4 py-4 flex gap-x-2">
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

            <!-- Button with number of containers active -->
            <div class="bg-[#f2cc8f] rounded-lg px-4 py-4 flex gap-x-2">
                <div class="bg-[#e07a5f] rounded-lg w-14 h-14 flex items-center justify-center p-2 relative">
                    <img src="../assets/images/docker_icon.svg" alt="" class="w-full">
                </div>
                <div class="text-gray-900 flex items-center">
                    <p class="font-semibold text-left leading-4">25 Active<br>Containers</p>
                </div>
            </div>
            <!-- Server Connection State -->
            <button class="bg-green-400 rounded-lg px-4 py-4 gap-x-2 h-full flex items-center">
                <img src="../assets/images/plus_square_icon.svg" alt="" class="h-10 opacity-20">
                <p class="font-semibold leading-4 text-gray-900">Add New<br>Card</p>
            </button>
            <button class="bg-[#f4f1de] rounded-lg px-4 py-4 gap-x-2 h-full flex items-center">
                <img src="../assets/images/magnifier_icon.svg" alt="" class="opacity-20 h-10">
                <p class="text-2xl font-semibold leading-5 text-gray-900">Auto<br>Scan</p>
            </button>
        </div>

    </header>
</template>
  
<script>
export default {
    
};
</script>
  
<style scoped>

</style>
  