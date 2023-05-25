<template>
    <div class="grid">
        <div v-for="(item, index) in currentReport?.tiles" :key="`${currentReport?.id}-${index}`" :class="item.widget.type === 'SPACER' ? 'grid-end' : ''">
            <WidgetTemplate v-bind:reportTiles="item" />
        </div>
    </div>
</template>     

<script setup lang="ts">
    import { useReportStore } from "~/stores/report";
    import { storeToRefs } from 'pinia'

    const reportStore = useReportStore()

    const { currentReport } = storeToRefs(reportStore)

    watch(currentReport,()=>{
        console.log(currentReport.value)
    })
</script>

<style lang="scss" scoped>
    .grid{
        display:grid;
        grid-template-columns: repeat(5, minmax(20%,auto));
        gap: 10px;
        margin-bottom: 50px;
    }

    .grid-end{
        grid-column-end: -1;
    }
</style>