<template>
    <v-card :elevation="10" :class="`${isLoading ? 'skeleton' : ''}`" :width="width" :height="height">
        <div v-if="isLoading"></div>
        <div>
            <v-toolbar class="d-flex justify-space-between toolbar">
                <v-toolbar-title >
                    {{ title }}
                </v-toolbar-title>
                <v-btn :min-width="10" :min-height="20">
                    <img class="icon" src="~/assets/icons/menu-icon.svg" alt="mail" />
                </v-btn>
            </v-toolbar>
            <v-card-text>0</v-card-text>
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
</style>