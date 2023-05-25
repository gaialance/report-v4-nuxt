<template>
    <v-card :elevation="10" :class="`${isLoading ? 'skeleton' : ''}`" :width="width" :height="height">
        <div v-if="isLoading"></div>
        <div v-else>
            <div v-if="widgetType === 'SCORECARD'">
                <WidgetScorecard>
                    <template v-slot:title>
                        {{ title }}
                    </template>
                    <template v-slot:content>
                        {{ 0 }}
                    </template>
                </WidgetScorecard>
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

const width = props.reportTiles.size.width * 150
const height = props.reportTiles.size.height * 200

const title = props.reportTiles.widget.title

const widgetType = props.reportTiles.widget.type

const widgetConfig = props.reportTiles.widget.config

setTimeout(()=>{
    isLoading.value = false
},3 * 1000)

</script>

<style lang="scss" scoped>
    .icon{
        height: 20px;
        width: 20px;
    }
</style>