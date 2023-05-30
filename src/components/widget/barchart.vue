<template>
  <v-toolbar class="d-flex justify-space-between toolbar">
    <v-toolbar-title>
      <slot name="title" />
    </v-toolbar-title>
    <WidgetExportmenu />
  </v-toolbar>
  <v-card-text>
    <slot name="content" />
  </v-card-text>
</template>

<style>
    .toolbar{
        background: #36454F;
    }

    .icon{
        height: 20px;
        width: 20px;
    }
</style>
