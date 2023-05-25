<template>
  <v-row class="mb-2">
        <v-col cols="6" lg="8"> 
            <h4 class="text-h4">
                {{currentReport?.name}}
            </h4>
        </v-col>
        <v-col cols="6" lg="4" align="right">
            <Datepicker />
        </v-col>
    </v-row>

    <v-divider/>

    <v-row class="my-2">
        <v-col cols="6" lg="4">
            <v-select multiple :items="restaurantAndWarehouseList" label="Restaurant / Warehouse" v-model="selectedRestaurantAndWarehouseIds" item-title="name" item-value="id" >
                <template v-slot:selection="{item,index}">
                    <span v-if=" index < 1">
                        <v-chip>
                            {{ item.title }}
                        </v-chip>
                    </span>
                    <span v-if=" index === 1">
                        (+{{ selectedRestaurantAndWarehouseIds.length - 1  }} others selected)
                    </span>
                </template>
            </v-select>
        </v-col>
        <v-col cols="6" lg="8" class="d-flex justify-end ma-0 pa-0">
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
    </v-row>
</template>

<script lang="ts" setup >
    import { storeToRefs } from 'pinia'

    import { getSchema } from '~/api/schemas';
    import { getReport } from '~/api/reports';

    // stores
    import { useReportStore } from '~/stores/report';
    import { getRestaurantOptions,getWareHouseOptions } from '~/api/businessConfig';
    import { Restaurant } from '~/types/business';
    import { useReportFilterStore } from '~/stores/reportfilters';

    const reportStore = useReportStore()

    // fetch all the config files details
    reportStore.addSchemasToStore(await getSchema())

    reportStore.addToReportsToStore(await getReport())

    reportStore.initializeReport()

    const { currentReport } = storeToRefs(reportStore)

    const reportFilterStore = useReportFilterStore()
    
    reportFilterStore.addRestaurantToStore(await getRestaurantOptions())

    reportFilterStore.addWarehouseStore(await getWareHouseOptions())
    
    const { selectedRestaurantAndWarehouseIds,restaurantAndWarehouseList } = storeToRefs(reportFilterStore)

    // default all selected
    reportFilterStore.initializeSelectedSetting()
</script>

<style lang="scss" scoped> 

    .social-media{
        display: flex;
        align-items: center;
    }
    .social-media > *{
        width: 85px;
        margin: 0 10px;
    }

    .icon{
        height: 20px;
    }
</style>