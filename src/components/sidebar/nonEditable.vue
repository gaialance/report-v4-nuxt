
<template>
  <v-list-group value="general">
    <template #activator="{isOpen,props:activatorValue}">
      <v-list-item v-bind="activatorValue" append-icon="" active link>
        <div class="d-flex justify-space-between">
          General
          <img v-if="isOpen" class="icon" src="~/assets/icons/up-icon.svg" alt="mail">
          <img v-else class="icon" src="~/assets/icons/down-icon.svg" alt="mail">
        </div>
      </v-list-item>
    </template>
    <v-list-item
      v-for="(item, index) in props.data"
      :key="`${item.name}_${index}`"
      link
      v-bind="props"
      :active="currentReport?.name === item.name"
      @click="updateCurrentReportId(item.id)"
    >
      <v-list-item>
        {{ item.name }}
      </v-list-item>
    </v-list-item>
  </v-list-group>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useReportStore } from '~/stores/report'
import { Report } from '~/types/report'

const props = defineProps<{
        data: Report[]
    }>()

const reportStore = useReportStore()

const { currentReport } = storeToRefs(reportStore)

const { updateCurrentReportId } = reportStore
</script>

<style lang="scss" scoped>
    .icon{
        height: 20px;
        width: 20px;
    }
</style>
