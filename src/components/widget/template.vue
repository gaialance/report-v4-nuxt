<template>
  <v-card :elevation="10" :class="`${isLoading ? 'skeleton' : ''}`" :width="width" :height="height">
    <div v-if="isLoading" />
    <div v-else>
      {{ widgetType }}
      <div v-if="widgetType === 'SCORECARD'">
        <WidgetScorecard>
          <template #title>
            {{ title }}
          </template>
          <template #content>
            {{ 0 }}
          </template>
        </WidgetScorecard>
      </div>
      <div v-if="widgetType === 'TABLE'">
        <WidgetTablecard>
          <template #title>
            {{ title }}
          </template>
          <template #content>
            <table>
              <tr>
                <th>
                  {{ widgetConfig }}
                </th>
                <th> test</th>
              </tr>
            </table>
          </template>
        </WidgetTablecard>
      </div>
      <div v-if="widgetType === 'BARCHART'">
        test
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ReportTile } from '~/types/report'

const isLoading = ref(true)

const props = defineProps<{
    reportTiles: ReportTile
}>()

const width = computed(() => (screen.width / 12) * props.reportTiles.size.width)
const height = computed(() => (screen.width / 12) * props.reportTiles.size.height)

const title = computed(() => props.reportTiles.widget.title)

const widgetType = computed(() => props.reportTiles.widget.type)

const widgetConfig = computed(() => props.reportTiles.widget.config)

setTimeout(() => {
  isLoading.value = false
}, 3 * 1000)

</script>

<style lang="scss" scoped>

  .icon{
      height: 20px;
      width: 20px;
  }
</style>
