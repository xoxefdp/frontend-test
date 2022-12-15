<template>
  <div class="tariff-filtering">
    <div class="tariff-filtering__heading">
      <div class="tariff-filtering__title">
        Filters
      </div>
      <div class="tariff-filtering__reset">
        <button @click="resetFilters">
          Clear
        </button>
      </div>
    </div>
    <div class="tariff-filtering__filters-list">
      <div
        v-for="(filter, index) in filters"
        :key="index"
        :class="hasFilterBeenApplied(filter) ? 'tariff-filtering__filter--active' : 'tariff-filtering__filter'"
      >
        <label :for="filter.name">
          <span>{{ filter.description }}</span>
          <span v-if="filter.type === 'boolean'">
            <input
              v-model="filter.data"
              type="checkbox"
              @change="toggleFilter($event, filter)"
            >
          </span>
          <!-- <span v-if="filter.type === String"><input type="checkbox" :name="filter.name" :checked="filter.data"></span> -->
          <span v-if="filter.type === 'number'">
            <input
              v-model="filter.data"
              type="number"
              @input="toggleFilter($event, filter)"
            >
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUpdated, onBeforeMount } from 'vue'
// import { FILTERING } from '../../events/events'

const AVAILABLE_FILTERS = [
  { name: 'finalPrice', description: 'Has final price', type: 'boolean', data: false },
  // { name: 'modality', description: 'Modality', type: String, data: null },
  { name: 'withExcess', description: 'With excess', type: 'boolean', data: false },
  { name: 'withoutExcess', description: 'Without excess', type: 'boolean', data: false },
  { name: 'minPrice', description: 'Min price', type: 'number', data: null },
  { name: 'maxPrice', description: 'Max price', type: 'number', data: null },
]

// REFs
const filters = ref([])
const activeFilters = ref([])

// FUNCTIONS
const resetFilters = () => {
  filters.value = JSON.parse(JSON.stringify(AVAILABLE_FILTERS))
  activeFilters.value = []
}

const hasFilterBeenApplied = (filter) => {
  let filterFound = activeFilters.value.find((currentFilter) => currentFilter.name === filter.name)
  return !!filterFound
}

const _canPushBooleanFilter = (filter) => {
  return filter.type === 'boolean' && !hasFilterBeenApplied(filter)
}
const _canPushNumberFilter = (filter) => {
  return filter.type === 'number' && filter.data !== ''
}

const canPushFilter = (filter) => {
  let canFilterBePushed = false
  if (_canPushBooleanFilter(filter)) {
    canFilterBePushed = true
  } else if (_canPushNumberFilter(filter)) {
    canFilterBePushed = true
  }
  return canFilterBePushed
}

const toggleFilter = (event, filtering) => {
  canPushFilter(filtering)
    ? pushFilter(filtering)
    : pullFilter(filtering);
}

const pushFilter = (filter) => {
  if (_canPushBooleanFilter(filter)) {
    activeFilters.value.push(filter)
  } else if (_canPushNumberFilter(filter)) {
    if (hasFilterBeenApplied(filter)) {
      activeFilters.value.map(currentFilter => {
        if (currentFilter.name === filter.name) {
          return currentFilter.data = filter.data
        }
        return currentFilter
      })
    } else {
      activeFilters.value.push(filter)
    }
  }
}

const pullFilter = (filter) => {
  if (hasFilterBeenApplied(filter)) {
    const foundFilterIndex = activeFilters.value.findIndex(currentFilter => {
      return currentFilter.name === filter.name
    })
    foundFilterIndex !== -1 && activeFilters.value.splice(foundFilterIndex, 1)
  }
}

// LIFECYCLE
onBeforeMount(() => {
  filters.value = JSON.parse(JSON.stringify(AVAILABLE_FILTERS))
})

onUpdated(() => {
  console.log('onUpdated')
  console.log(AVAILABLE_FILTERS)
  console.log(filters.value)
  console.log(activeFilters.value)
})
</script>

<style>
.tariff-filtering {
  text-align: left;
}

.tariff-filtering__heading {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  margin-bottom: 16px;
}

.tariff-filtering__title,
.tariff-filtering__reset {
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
}

.tariff-filtering__filter,
.tariff-filtering__filter--active {
  padding: 4px;
  margin-bottom: 8px;
}

.tariff-filtering__filter--active {
  background-color: yellow;
}
</style>
