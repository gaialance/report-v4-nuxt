<script setup lang="ts">
import { getReport } from '~/api/reports'

import { Report } from '~/types/report'

const isExpanded = ref(true)

// Fetch reports config
const reportConfig = ref<Report[]>([])

reportConfig.value = await getReport()

const nonEditableList = reportConfig.value.filter(item => !item.editable)
const editableList = reportConfig.value.filter(item => item.editable)

</script>

<template>
  <v-navigation-drawer :rail="!isExpanded" class="navigation" permanent>
    <div class="d-flex justify-end mt-2">
      <v-btn :class="isExpanded ? 'animation' : 'btn'" @click="isExpanded = !isExpanded">
        <img class="icon" src="~/assets/icons/right-arrow.svg" alt="right arrorw">
      </v-btn>
    </div>
    <v-list :class="!isExpanded ? 'hide' : ''">
      <v-list-item link class="orange-text">
        New report
      </v-list-item>
      <v-divider />
      <SidebarNonEditable :data="nonEditableList" />
      <v-divider />
      <SidebarEditable :data="editableList" />
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
  .hide {
    visibility: hidden;
  }

  * {
      --btn-transition-time: 0.5s ease-in
  }
  .icon{
      height: 20px;
  }

  .animation{
    animation: sliderX 0.3s ease forwards;
  }

  .btn{
      transition: var(--btn-transition-time)
  }

  @keyframes sliderX {
    0% {
      transform: translateX(-200px);
    }

    100% {
      transform: translateX(0) rotateY(180deg)
    }
  }
</style>
