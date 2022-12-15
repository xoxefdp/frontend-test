<template>
  <TariffResultScreen :tariffs="collection" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import getTariffResults from './service/tariffs'
import TariffResultScreen from './ui/screen/tariffResult/TariffResultScreen.vue'

const collection = ref([])

onMounted(() => {
  getTariffResults().then((data) => {
    collection.value = data
  })
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 16px;
}
</style>
