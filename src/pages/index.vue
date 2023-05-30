<template>
  <div class="d-flex flex-wrap">
    <v-col
      v-for="(item) in currentReport?.tiles"
      :key="`${currentReport?.id}-${item.widget.title}`"
      class="d-flex"
      :lg="item.size.width"
      :sm="item.size.width*3"
    >
      <WidgetTemplate :report-tiles="item" />
    </v-col>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useReportStore } from '~/stores/report'

const reportStore = useReportStore()

const { currentReport } = storeToRefs(reportStore)
</script>
