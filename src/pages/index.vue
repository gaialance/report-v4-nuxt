<template>
  <div class="d-flex flex-wrap">
    <div v-for="(item) in currentReport?.tiles" :key="item.widget.title" :class="`v-col-${item.size.width}`">
      <WidgetTemplate :report-tiles="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useReportStore } from '~/stores/report'

const reportStore = useReportStore()

const { currentReport } = storeToRefs(reportStore)
</script>
