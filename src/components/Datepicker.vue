<template>
  <VueDatePicker
    ref="datepickerValue"
    v-model="dates"
    month-name-format="short"
    :month-change-on-scroll="false"
    range
    hide-offset-dates
    close-on-scroll
    teleport-center
    :is-24="false"
  >
    <template #left-sidebar>
      <div v-for="preset of presetRanges" :key="preset.label" class="left-sidebar mt-2" @click="updateDates(preset.range)">
        <p class="orange-text mb-2">
          {{ preset.label }}
        </p>
        <v-divider color="black" />
      </div>
    </template>

    <template #action-buttons>
      <v-btn @click="selectDate">
        Select
      </v-btn>
    </template>
    <template #action-preview="{ value }">
      <p>Start Date: {{ value && formatDateTime(value[0]) }}</p>
      <p>End Date: {{ value && formatDateTime(value[1]) }}</p>
    </template>
    <template #trigger>
      <v-btn>
        <p>{{ formatDateRange }}</p>
      </v-btn>
    </template>
  </VueDatePicker>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { DateTime } from 'luxon'
import { storeToRefs } from 'pinia'

// internal lib
import { useReportFilterStore } from '~/stores/reportfilters'
import { PresetRange } from '~/types/types'

// variable
const emits = defineEmits(['confirmSelectedPicker'])
const datepickerValue = ref()

// pinia
const reportFilterStore = useReportFilterStore()
const { dates, formatDateRange } = storeToRefs(reportFilterStore)

const presetRanges = computed<PresetRange[]>(() => [
  { label: 'Today', range: [DateTime.now().startOf('day').toJSDate(), DateTime.now().endOf('day').toJSDate()] },
  { label: 'Yesterday', range: [DateTime.now().minus({ days: 1 }).startOf('day').toJSDate(), DateTime.now().minus({ days: 1 }).endOf('day').toJSDate()] },
  { label: 'This Week', range: [DateTime.now().startOf('week').toJSDate(), DateTime.now().endOf('week').toJSDate()] },
  { label: 'Last Week', range: [DateTime.now().minus({ weeks: 1 }).startOf('week').toJSDate(), DateTime.now().minus({ weeks: 1 }).endOf('week').toJSDate()] },
  { label: 'This month', range: [DateTime.now().startOf('month').toJSDate(), DateTime.now().endOf('month').toJSDate()] },
  { label: 'Last month', range: [DateTime.now().minus({ months: 1 }).startOf('month').toJSDate(), DateTime.now().minus({ months: 1 }).endOf('month').toJSDate()] },
  { label: 'This year', range: [DateTime.now().startOf('year').toJSDate(), DateTime.now().endOf('year').toJSDate()] }
])

// functions
const updateDates = (ranges: Date[]) => {
  dates.value = [...ranges]
}

const selectDate = () => {
  datepickerValue.value.selectDate()
  emits('confirmSelectedPicker', dates.value)
}

const formatDateTime = (date: Date | null) => {
  if (date) {
    if (DateTime.fromJSDate(date).isValid) {
      return `${DateTime.fromJSDate(date).toFormat('dd/MM/yyyy HH:mm')}`
    }
    return ''
  }
  return ''
}

</script>

<style lang="scss" scoped>
    .left-sidebar{
        text-align: center;
        width: 150px;
    }

    .preview{
        display: flex;
        flex-direction: column;
        font-size: medium;
    }
</style>
