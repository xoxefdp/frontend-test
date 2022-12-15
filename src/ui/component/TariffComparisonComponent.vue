<template>
  <div class="comparison-component">
    compare {{ filter }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  filter: String
})
</script>
