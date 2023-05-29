<template>
  <v-card :elevation="10" :class="`${isLoading ? 'skeleton' : ''}`" :width="width" :height="height">
    <div v-if="isLoading" />
    <v-toolbar v-else color="" class="d-flex justify-space-between">
      <v-toolbar-title color="background">
        {{ title }}
      </v-toolbar-title>
      <v-btn :min-width="10" :min-height="20">
        <img class="icon" src="~/assets/icons/menu-icon.svg" alt="mail">
      </v-btn>
    </v-toolbar>
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

const title = computed(() => props.reportTiles.widget.title)

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
