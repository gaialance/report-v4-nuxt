<template>
    <v-list-group value="Custom">
        <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" @click="showList = !showList" append-icon="">
                <v-list-item-title class="d-flex justify-space-between">
                    Custom
                    <v-btn class="btn" @click="toggleEditList">
                        <img v-if="editList" class="icon" src="~/assets/icons/open-edit-icon.svg" alt="edit icon"/>
                        <img v-else class="icon" src="~/assets/icons/close-edit-icon.svg" alt="edit icon"/>
                    </v-btn>
                    <img v-if="showList" class="icon" src="~/assets/icons/up-icon.svg" alt="up arrow" />
                    <img v-else class="icon" src="~/assets/icons/down-icon.svg" alt="down arrow" />
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
    const editList = ref(false)

    const toggleEditList = () =>{
        editList.value = !editList.value
        showList.value = true
    }
</script>

<style lang="scss" scoped>
    .icon{
        height: 20px;
        width: 20px;
    }

    .btn{
        width: 50px;
        z-index: 999;
    }
</style>