<template>
  <div id="app" class="min-h-screen flex flex-col justify-between">
    <AppHeader />
    <div class="justify-center flex items-center flex-wrap gap-4">
        <Card v-for="n in 5" :key="n"/>
    </div>

    <footer class="relative top-0 bottom-0">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 182">
        <path fill-rule="evenodd" fill="rgb(129, 178, 154)"
          d="M0.000,70.082 C0.000,70.082 125.822,85.384 238.668,75.957 C407.471,61.856 609.499,-48.478 908.238,58.331 C908.238,58.331 1059.174,114.736 1342.707,32.300 C1582.245,-37.345 1722.267,24.617 1774.479,42.507 C1861.812,72.432 1920.000,75.957 1920.000,75.957 L1920.000,181.997 L0.000,181.997 L0.000,70.082 Z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 135"
        class="absolute bottom-0">
        <path fill-rule="evenodd" fill="rgb(242, 204, 143)"
          d="M0.000,77.615 C0.000,77.615 327.066,-13.136 558.407,39.883 C789.747,92.903 842.488,81.772 960.000,72.050 C1077.512,62.328 1328.170,0.067 1413.238,0.001 C1611.664,-0.151 1691.598,85.063 1920.000,52.920 L1920.000,135.001 L0.000,135.001 L0.000,77.615 Z" />
      </svg>
      <div class="absolute bottom-2 w-full pr-2 pl-2">
        <div class=" flex justify-between">
          <p class="flex-1 text-left">&copy; Copyright 2023. All rights reserved.</p>
          <p class="flex-1">Made with <span class="text-red-500">&#10084;</span> by Paradox</p>
          <button class="flex gap-2 flex-1 justify-end">
            <p>Github</p>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path
                d="M23.548 10.931l-10.479-10.478c-.302-.302-.698-.453-1.093-.453-.396 0-.791.151-1.093.453l-2.176 2.176 2.76 2.76c.642-.216 1.377-.071 1.889.44.513.515.658 1.256.435 1.9l2.66 2.66c.644-.222 1.387-.078 1.901.437.718.718.718 1.881 0 2.6-.719.719-1.883.719-2.602 0-.54-.541-.674-1.334-.4-2l-2.481-2.481v6.529c.175.087.34.202.487.348.717.717.717 1.881 0 2.601-.719.718-1.884.718-2.601 0-.719-.72-.719-1.884 0-2.601.177-.178.383-.312.602-.402v-6.589c-.219-.089-.425-.223-.602-.401-.544-.544-.676-1.343-.396-2.011l-2.721-2.721-7.185 7.185c-.302.302-.453.697-.453 1.093 0 .395.151.791.453 1.093l10.479 10.478c.302.302.697.452 1.092.452.396 0 .791-.15 1.093-.452l10.431-10.428c.302-.303.452-.699.452-1.094 0-.396-.15-.791-.452-1.093" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    Card,
    AppHeader
  }
}
</script>

<style lang="postcss" scoped>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #3d405b;
  /* background-image: linear-gradient(135deg, #aa3bb1, #582a7e); */

}

button:disabled,
button[disabled] {
  user-select: none;
  opacity: 0.3;
  cursor: not-allowed;
  background: black;
}

</style>
