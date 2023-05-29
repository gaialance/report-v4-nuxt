<template>
  <v-app>
    <SidebarTemplate />
    <v-main>
      <v-container>
        <v-card elevation="20">
          <v-container>
            <v-row>
              <v-col>
                <FilterBar />
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
import { useQueryStore } from '~/stores/queries'

// set the token at layout
const queryStore = useQueryStore()

// fetch the token from the url
const route = useRoute()

// set the token to store so other pages can use
queryStore.setupToken(route.query.token ? route.query.token as string : '')
queryStore.setupBusinessId(route.query.businessId ? route.query.businessId as string : '')

</script>

<style scoped>

</style>
