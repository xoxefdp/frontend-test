<template>
  <div class="tariff-result">
    <TariffFilteringComponent class="tariff-result__filtering" />
    <div class="tariff-result__main">
      <div class="tariff-result__table">
        <TariffOrderingComponent
          class="tariff-result__ordering"
          :order-criteria-desc="orderDesc"
          @change-order-direction="onChangeOrderDirection"
        />
        <TariffListComponent
          class="tariff-result__tariff-list"
          :tariffs="tariffsList"
        />
      </div>
      <TariffComparisonComponent
        class="tariff-result__comparison"
        :tariffs="comparedTariffs"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onUpdated } from 'vue'
import TariffFilteringComponent from '../../component/TariffFilteringComponent.vue'
import TariffOrderingComponent from '../../component/TariffOrderingComponent.vue';
import TariffListComponent from '../../component/TariffListComponent.vue';
import TariffComparisonComponent from '../../component/TariffComparisonComponent.vue';

import { sortByPriceDesc, sortByPriceAsc } from '../../../util/arraySorting'

const comparedTariffs = ref([])
const orderDesc = ref(true)
const tariffsList = ref([])

const props = defineProps({
  tariffs: Array
})

const onChangeOrderDirection = () => {
  orderDesc.value = !orderDesc.value
}

onUpdated(() => {
  tariffsList.value = props.tariffs
  if (orderDesc.value) {
    tariffsList.value = tariffsList.value.sort(sortByPriceDesc)
  } else {
    tariffsList.value = tariffsList.value.sort(sortByPriceAsc)
  }
})

</script>

<style>
.tariff-result {
  height: calc(100vh - 48px);
  display: grid;
  grid-template-columns: calc(25% - 4px) calc(75% - 4px);
  grid-gap: 8px;
}

.tariff-result__filtering,
.tariff-result__ordering,
.tariff-result__comparison {
  border: 1px solid black;
  padding: 7px;
}

.tariff-result__tariff-list {
  max-height: 824px;
  overflow-y: scroll;
}
</style>
