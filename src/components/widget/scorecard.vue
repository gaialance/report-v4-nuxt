<template>
  <v-card-title class="d-flex justify-space-between">
    <slot name="title" />
    <WidgetExportmenu />
  </v-card-title>
  <v-card-text>
    <slot name="content" />
  </v-card-text>
</template>

<style lang="scss" scoped>
  .icon{
      height: 20px;
      width: 20px;
  }
</style>
