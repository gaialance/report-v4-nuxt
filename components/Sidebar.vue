<script setup lang="ts">

const props = defineProps({
  isExpanded: Boolean,
})

const menuLists = [
    {title:"Dashboard"},
    {title:"Profile"}
]

</script>

<template>
    <v-navigation-drawer app v-model="props.isExpanded">   
      <v-list>
        <v-list-item v-for="item in menuLists" :key="item.title" link>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<style lang="scss" scoped>
  .button{
    z-index: 999;
  }
</style>
