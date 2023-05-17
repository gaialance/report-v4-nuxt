<script setup lang="ts">
import { getReport } from "~/api/reports"

import { Report } from "~/types/report"

const props = defineProps({
  isExpanded: Boolean,
})

const isExpanded = ref(props.isExpanded)

// Fetch reports config
const reportConfig = ref<Report[]>([])

reportConfig.value = await getReport()

const nonEditableList = reportConfig.value.filter((item)=>!item.editable)
const editableList = reportConfig.value.filter((item)=>item.editable)

</script>

<template>
      <v-navigation-drawer app v-model="isExpanded" class="navigation">   
        <v-list>
          <v-list-item link class="orange-text">
            <v-list-item-title >New report</v-list-item-title>
          </v-list-item>
          <v-divider />
          <SidebarNonEditable :data="nonEditableList"/>
          <v-divider />
          <SidebarEditable :data="editableList" />
        </v-list>
      </v-navigation-drawer>
</template>

<style lang="scss" scoped>
  .icon{
    height: 20px;
    width: 20px;
  }
  .button{
    z-index: 999;
  }
</style>
