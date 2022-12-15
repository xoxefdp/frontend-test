<template>
  <div class="tariff-list-item">
    <div class="tariff-list-item__wrapper">
      <div class="tariff-list-item__container">
        <img
          class="tariff-list-item__logo"
          width="96"
          height="96"
          :src="tariff.logo"
          alt=""
        >
        <div class="tariff-list-item__modality">
          {{ tariff.modality.name }}
        </div>
      </div>
      <div class="tariff-list-item__features">
        <FeatureListComponent :tariff-features="tariff.features" />
      </div>
      <div class="tariff-list-item__grade">
        {{ tariff.grade.total }}
      </div>
      <div class="tariff-list-item__container">
        <div
          class="tariff-list-item__price"
          :class="{ 'not-final': isNotFinalPrice }"
        >
          {{ tariff.price }} €
        </div>
        <div class="tariff-list-item__excess">
          {{ tariff.excess }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
import FeatureListComponent from './FeatureListComponent.vue'

const isNotFinalPrice = ref(false)

const props = defineProps({
  tariff: Object
})

onMounted(() => {
  isNotFinalPrice.value = !props.tariff.final_price
})
</script>

<style>
.tariff-list-item,
.tariff-list-item__price {
  margin-bottom: 8px;
}

.tariff-list-item,
.tariff-list-item__modality,
.tariff-list-item__grade,
.tariff-list-item__price,
.tariff-list-item__excess {
  padding: 7px;
}

.tariff-list-item,
.tariff-list-item__modality,
.tariff-list-item__grade,
.tariff-list-item__price,
.tariff-list-item__excess {
  border: 1px solid black;
}

.tariff-list-item__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
}

.item {
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
}

.item-grid-row {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr;
}

.not-final {
  color: red;
}
</style>
