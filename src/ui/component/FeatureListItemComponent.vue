<template>
  <div class="feature-list-item">
    <div>{{ feature.description }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  feature: Object
})
</script>

<style>
.feature-list-item {
  border: 1px solid black;
  padding: 7px;
  margin-bottom: 8px;
}
</style>
