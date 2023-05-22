<template>
    <v-row>
        <v-col cols="6" lg="8"> 
            <h4 class="text-h4">
                {{currentReport?.name}}
            </h4>
        </v-col>
        <v-col cols="6" lg="4" align="right">
            <Datepicker></Datepicker>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="6" lg="2">
            <v-select multiple chips :items="['harlo','test']" label="Restaurant / Warehouse">  
            </v-select>
        </v-col>
        <v-col cols="6" lg="10" class="d-flex justify-end ma-0 pa-0">
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

<script setup lang="ts">
    import { getSchema } from '~/api/schemas';
    import { getReport } from '~/api/reports';

    // stores
    import { useReportStore } from '~/stores/report';
    import { useBusinessStore } from '~/stores/business';
    import { useQueryStore } from '~/stores/queries'

    // set token first
    const queryStore = useQueryStore()

    // fetch the token from the url
    const route = useRoute()

    // set the token to store so other pages can use
    queryStore.setupToken(route.query.token ? route.query.token as string : '')
    queryStore.setupBusinessId(route.query.businessId ? route.query.businessId as string : '')

    const reportStore = useReportStore()

    // fetch all the config files details
    reportStore.addSchemasToStore(await getSchema())

    reportStore.addToReportsToStore(await getReport())

    reportStore.initializeReport()

    const businessStore = useBusinessStore()

    businessStore

</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        height: 50px;
        padding: 0;
        align-items: center;
    }

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

    .grid{
        display:grid;
        grid-template-columns: repeat(5, minmax(20%,auto));
        gap: 10px;
    }
</style>