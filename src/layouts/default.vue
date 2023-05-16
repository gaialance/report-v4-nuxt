<template>
    <v-app>
        <Sidebar v-bind:isExpanded="isExpanded"/>
        <v-main>
            <v-container>
                <v-card elevation="20">
                    <v-container>
                        <v-row>
                            <v-col cols="1">
                                <v-btn @click="toggleMenu" :max-width="400" :min-width="80">
                                    <img class="icon" src="~/assets/icons/right-arrow.svg" alt="right arrorw" />
                                </v-btn>
                            </v-col>
                            <v-col cols="11">
                                <slot />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    // reactive State
    const isExpanded = ref(false)

    const toggleMenu = () =>{
        isExpanded.value = !isExpanded.value
    }
</script>

<style scoped>
    .icon{
        height: 20px;
    }
</style>