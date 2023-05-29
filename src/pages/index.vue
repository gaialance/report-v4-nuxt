<template>
  <div class="grid">
    <div v-for="(item, index) in currentReport?.tiles" :key="index">
      <template v-if="item.widget.type === 'SPACER'" />
      <template v-else>
        <Widget :report-tiles="item" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useReportStore } from '~/stores/report'

const reportStore = useReportStore()

const { currentReport } = storeToRefs(reportStore)
</script>

<style lang="scss" scoped>
    .grid{
        display:grid;
        grid-template-columns: repeat(5, minmax(20%,auto));
        gap: 10px;
        margin-bottom: 50px;
    }
</style>
