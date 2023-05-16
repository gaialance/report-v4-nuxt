<script setup lang="ts">
import { getReport } from "~/api/reports"

import { Report } from "~/types/report"

const props = defineProps({
  isExpanded: Boolean,
})

// Fetch reports config
const reportConfig = ref<Report[]>()

reportConfig.value = await getReport()

</script>

<template>
      <v-navigation-drawer app v-model="props.isExpanded" class="navigation">   
        <v-list>
          <v-list-item link class="orange-text">
            <v-list-item-title >New report</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-group value="General">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props">
                <v-list-item-title class="d-flex justify-space-between">
                  General
                  <img v-if="props" class="icon" src="~/assets/icons/up-icon.svg" alt="mail" />
                  <img v-else class="icon" src="~/assets/icons/down-icon.svg" alt="mail" />
                </v-list-item-title>
              </v-list-item>
            </template>
            <v-list-item v-for="(item, index) in reportConfig" :key="`${item.name}_${index}`" link v-bind="props">
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-divider />
          <v-list-group value="Custom">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props">
                <v-list-item-title>Custom</v-list-item-title>
              </v-list-item>
            </template>
          </v-list-group>
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
