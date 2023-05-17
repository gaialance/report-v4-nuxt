<template>
    <v-app>
        <SidebarTemplate v-model="isExpanded"/>
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
    import { useQueryStore } from '~/stores/query'

    // set the token at layout
    const queryStore = useQueryStore()

    // fetch the token from the url
    const route = useRoute()

    // set the token to store so other pages can use
    queryStore.setupToken(route.query.token ? route.query.token as string : '')
    queryStore.setupBusinessId(route.query.businessId ? route.query.businessId as string : '') 

    // reactive State
    const isExpanded = ref(true)

    const toggleMenu = () =>{
        isExpanded.value = !isExpanded.value
    }
</script>

<style scoped>
    .icon{
        height: 20px;
    }
</style>