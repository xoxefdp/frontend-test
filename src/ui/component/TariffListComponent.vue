<template>
  <div class="tariff-list">
    <div class="tariff-list__notice">
      <p class="tariff-list__description">
        * prices typed in <span class="tariff-list__description--important">red</span>
        color are not
        final
      </p>
    </div>
    <TariffListItemComponent
      v-for="(tariff, index) in tariffs"
      :key="index"
      class="tariff-list__item"
      :tariff="tariff"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import TariffListItemComponent from './TariffListItemComponent.vue';

defineProps({
  tariffs: Array
})

</script>

<style>
.tariff-list__description {
  text-align: right;
}

.tariff-list__description--important {
  color: red
}
</style>
