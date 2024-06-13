<template>
    <div class="absolute top-24 z-50 right-0 w-72">
      <!-- Container box -->
      <div class="bg-[#ffe8c7] p-4 rounded-lg shadow-lg">
        <!-- Container count -->
        <p class="text-gray-900">Total containers found: {{ containerCount }}</p>
        <p class="text-gray-900 mb-4">New containers found: {{ containerCount }}</p>
        
        <!-- Buttons -->
        <div class="flex justify-between">
          <!-- Add Auto Button -->
          <button @click="addAuto" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mr-2">
            Add Auto
          </button>
          
          <!-- Ignore/Cancel Button -->
          <button @click="ignore" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            Ignore/Cancel
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalContainerCount: Number, // Total container count to display
      currentContainerCount: Number, // Current container count to display
    },
    methods: {
      addAuto() {
        // Implement logic for adding containers automatically
        // You can emit an event or make an API call here
        this.$emit('add-auto');
      },
      ignore() {
        // Implement logic for ignoring or canceling the operation
        // You can emit an event or take appropriate action here
        this.$emit('ignore');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Apply additional styles here as needed */
  </style>
  