
<template>
    <v-list-group value="general">
        <template #activator="{isOpen,props}">
            <v-list-item v-bind="props" append-icon="" link>
                <div class="d-flex justify-space-between">
                    General
                    <img v-if="isOpen" class="icon" src="~/assets/icons/up-icon.svg" alt="mail" />
                    <img v-else class="icon" src="~/assets/icons/down-icon.svg" alt="mail" />
                </div>
            </v-list-item>
        </template>
        <v-list-item v-for="(item, index) in props.data" :key="`${item.name}_${index}`" link v-bind="props">
            <v-list-item :active="currentReport?.name === item.name" @click="updateCurrentReportId(item.id)">
                {{ item.name }}
            </v-list-item>
        </v-list-item>
    </v-list-group>
</template>

<script setup lang="ts">
    import { useReportStore } from "~/stores/report"
    import { Report } from "~/types/report"
    import {storeToRefs} from 'pinia'
    
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
