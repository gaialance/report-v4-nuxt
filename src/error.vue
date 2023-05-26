<template>
    <v-container fluid class="container">
        <v-card class="d-flex flex-column align-center h-100 justify-center">
            <v-card-title class="text-medium-emphasis">
                <h1>
                    {{ error.statusCode }}
                </h1>
            </v-card-title>
            <v-card-item>
                <v-divider class="border-opacity-100"/>
                <v-card-text>
                    <h2>
                        Opps .. <br/>
                        Something went wrong        
                    </h2>
                </v-card-text>
                <v-divider class="border-opacity-100"/>
            </v-card-item>
            <v-card-actions>
                <v-btn class="orange-btn" @click="backToHomePage">
                    Back
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup>
    import { useQueryStore } from '~/stores/queries'

    defineProps(['error'])

    const queryStore = useQueryStore()

    const { businessId,token } = queryStore

    const backToHomePage = () => {
        navigateTo(`/businessId=${businessId}&token=${token}`)
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 100vw;
        height: 100vh;
    }
</style>