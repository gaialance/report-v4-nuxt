<template>
    <v-list-group value="Custom">
        <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" @click="showList = !showList" append-icon="" active>
                <v-list-item-title class="d-flex justify-space-between">
                    Custom
                    <div>
                        <button class="btn" @click="toggleEditList">
                            <img v-if="allowDrag" class="icon" src="~/assets/icons/close-edit-icon.svg" alt="edit icon"/>
                            <img v-else class="icon" src="~/assets/icons/open-edit-icon.svg" alt="edit icon"/>
                        </button>
                        <img v-if="showList" class="icon" src="~/assets/icons/up-icon.svg" alt="up arrow" />
                        <img v-else class="icon" src="~/assets/icons/down-icon.svg" alt="down arrow" />
                    </div>
                </v-list-item-title>
            </v-list-item>
        </template>
        <draggable :list="tempData" @start="dragging=true" @end="dragging=false" item-key="id" :disabled="!allowDrag">
            <template #item="{element}">
                <v-list-item link>
                    <v-list-item-title>
                        <img v-if="allowDrag" class="icon" src="~/assets/icons/dragable-icon.svg" alt="draggable" />
                        {{ element.name }}
                    </v-list-item-title>
                </v-list-item>
            </template>
        </draggable>
    </v-list-group>
</template>

<script setup lang="ts">
    import { Report } from "~/types/report"
    
    const props = defineProps<{
        data: Report[]
    }>()

    const tempData = ref(props.data)

    const showList = ref(true)
    const allowDrag = ref(false)
    const dragging = ref(false)

    const toggleEditList = () =>{
        event?.stopPropagation()
        allowDrag.value = !allowDrag.value
    }
</script>

<style lang="scss" scoped>
    .icon{
        height: 20px;
        width: 20px;
    }

    .btn{
        border-radius: 50px;
        width: 25px;
        height: 25px;
    }
    .btn:hover {
        background: rgb(78, 78, 78);
        
    }

</style>