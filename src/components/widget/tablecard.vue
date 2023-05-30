<template>
  <v-card-title class="d-flex flex-end">
    <slot name="title" />
    <WidgetExportmenu />
  </v-card-title>
  <v-card-text>
    <slot name="content" />
  </v-card-text>
</template>

  <style>
    .icon{
        height: 20px;
        width: 20px;
    }
  </style>
