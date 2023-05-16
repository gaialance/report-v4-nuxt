<template>
    <v-card :elevation="10" :class="`card ${isLoading ? 'skeleton' : ''}`">
        <div v-if="isLoading"></div>
        <slot v-else/>
    </v-card>
</template>

<style lang="scss" scoped>
    .card{
        height: 150px;
    }
</style>

<script setup lang="ts">
import { ref } from 'vue'

const isLoading = ref(true)

setTimeout(()=>{
    isLoading.value = false
},3 * 1000)

</script>