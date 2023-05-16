
<template>
    <v-list-group value="General">
        <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" @click="showList = !showList" append-icon="">
                <v-list-item-title class="d-flex justify-space-between">
                    General
                    <img v-if="showList" class="icon" src="~/assets/icons/up-icon.svg" alt="mail" />
                    <img v-else class="icon" src="~/assets/icons/down-icon.svg" alt="mail" />
                </v-list-item-title>
            </v-list-item>
        </template>
        <v-list-item v-for="(item, index) in props.data" :key="`${item.name}_${index}`" link v-bind="props">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
    </v-list-group>
</template>

<script setup lang="ts">
    import { Report } from "~/types/report"
    
    const props = defineProps<{
        data: Report[]
    }>()

    const showList = ref(true)
        
</script>

<style lang="scss" scoped>
    .icon{
        height: 20px;
        width: 20px;
    }
</style>
