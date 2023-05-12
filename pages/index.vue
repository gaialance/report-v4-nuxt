<template>
    <v-container class="container">
        <v-row>
            <v-col cols="8"> 
                <h4 class="text-h4">
                    Summary
                </h4>
            </v-col>
            <v-col cols="4" align="right">
                <Datepicker></Datepicker>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="container">
        <v-col :cols="1">
            <v-chip class="chip">7 Selected</v-chip>
        </v-col>
        <v-col :cols="11" class="d-flex justify-end ma-0 pa-0">
            <div class="social-media">
                <v-btn>
                    <img class="icon" src="~/assets/icons/mail-icon.svg" alt="mail" />
                </v-btn>
                <v-btn>
                    <img class="icon" src="~/assets/icons/share-icon.svg" alt="mail" />
                </v-btn>
                <v-btn>
                    <img class="icon" src="~/assets/icons/edit-icon.svg" alt="mail" />
                </v-btn>
            </div>
        </v-col>
    </v-container>
    <div class="grid pb-5">
        <div v-for="item in list">
            <Widget>
                <v-card-title class="d-flex justify-space-between">
                    {{ item }}
                    <v-btn>
                        <img class="icon" src="~/assets/icons/burger-menu.svg" alt="mail" />
                    </v-btn>
                </v-card-title>
                <v-card-item>
                    0
                </v-card-item>
            </Widget>
        </div>
    </div>
    <div class="grid">
        <div v-for="item in list2">
            <Widget>
                <v-card-title class="d-flex justify-space-between">
                    {{ item }}
                    <v-btn>
                        <img class="icon" src="~/assets/icons/burger-menu.svg" alt="mail" />
                    </v-btn>
                </v-card-title>
                <v-card-item>
                    2
                </v-card-item>
            </Widget>
        </div>
    </div>
    <div v-for="object in data">
        {{ object }}
    </div>
</template>

<script setup lang="ts">
    import { Schema } from '~/src/types/schema'
    import { nextTick } from 'vue'

    const config = useRuntimeConfig();
    
    const list = [1,2,3,4,5,6,7,8]
    const list2 = [1,2]

    const data = ref()  
    const isLoading = ref<boolean>(false)
    watch(isLoading,()=>{
        console.log("loading",isLoading.value)
    })

    onMounted(async ()=>{
        const token = window.localStorage.getItem('token') as string
        
        await nextTick()

        const { data:configResponse, pending , error , refresh } = await useFetch('/schemas',{
            method: 'get',
            headers:{
                Authorization: `Bearer ${token}`
            },
            baseURL:config.public.apiBase,
        })

        console.log("response",configResponse.value)

        isLoading.value = pending.value
    })
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        height: 50px;
        padding: 0;
        align-items: center;
    }
    .chip{
        display: flex;
        flex: none;
    }
    .social-media > *{
        width: 85px;
        margin: 0 10px;
    }

    .icon{
        height: 20px;
    }

    .grid{
        display:grid;
        grid-template-columns: repeat(5, minmax(20%,auto));
        gap: 10px;
    }
</style>