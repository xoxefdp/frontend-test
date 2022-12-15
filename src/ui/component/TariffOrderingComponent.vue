<template>
  <div class="ordering-component">
    Order By Price
    <button
      class="ordering-component__arrow"
      @click="changeOrderDirection"
      v-html="orderCriteriaDesc ? ARROW_DOWN : ARROW_UP"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { ORDERING } from '../../events/events'

defineProps({
  orderCriteriaDesc: Boolean
})

const publish = defineEmits([ORDERING.CHANGE_DIRECTION])

const ARROW_UP = '&#8679;'
const ARROW_DOWN = '&#8681;'

const changeOrderDirection = () => {
  publish(ORDERING.CHANGE_DIRECTION)
}

</script>

<style>
.ordering-component {
  margin-bottom: 8px;
}

.ordering-component__arrow {
  font-size: x-large;
}
</style>
