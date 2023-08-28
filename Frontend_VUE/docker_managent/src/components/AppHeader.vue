<template>
    <div class="bg-blue-500 text-white p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <!-- Input for Server IP -->
          <input
            v-model="serverIp"
            placeholder="Server IP"
            class="rounded-lg p-2 bg-gray-200 text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
          />
  
          <!-- Button to Auto Scan Containers -->
          <button
            @click="autoScanContainers"
            class="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2"
          >
            Auto Scan Containers
          </button>
  
          <!-- Button to Add a New Container -->
          <button
            @click="addNewContainer"
            class="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
          >
            Add a New Container
          </button>
        </div>
  
        <!-- Server Connection State -->
        <div class="text-lg font-semibold">
          Server Connection: {{ serverConnectionState }}
        </div>
      </div>
  
      <!-- Box with the Number of Containers Found -->
      <div class="mt-4">
        Containers Found: <span class="text-2xl font-semibold">{{ numberOfContainers }}</span>
      </div>
  
      <!-- Box with the Current Active Containers -->
      <div class="mt-2">
        Active Containers: <span class="text-2xl font-semibold">{{ activeContainers }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // ... (same as before)
  };
  </script>
  
  <style scoped>
  /* No need to include custom styles here, as Tailwind CSS classes are used above */
  </style>
  