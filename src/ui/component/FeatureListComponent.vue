<template>
  <div class="feature-list">
    <FeatureListItemComponent
      v-for="(feature, index) in tariffFeatures"
      :key="index"
      :feature="feature"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import FeatureListItemComponent from './FeatureListItemComponent.vue';

defineProps({
  tariffFeatures: Array
})

</script>

<style>
.feature-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
}
</style>
