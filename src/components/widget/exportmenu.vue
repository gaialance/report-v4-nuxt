<template>
  <v-btn :min-width="10" :min-height="20" @mouseover="showHoverToolTip = true" @mouseleave="showHoverToolTip = false">
    <img class="icon" src="~/assets/icons/menu-icon.svg" alt="mail">
    <v-tooltip v-model="showHoverToolTip" location="top">
      Show Menu
    </v-tooltip>
    <v-menu activator="parent">
      <v-list>
        <v-list-item v-for="(item, index) in exportSetting" :key="index" :value="index">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const exportSetting = ['Export Excel', 'Export PDF (A4 Size)', 'Export PDF (Full Size)']

const showHoverToolTip = ref(false)
</script>

<style>

</style>
