import { Report } from '~/types/report'
import { Schema } from '~/types/schema'

const storeKey = 'report-store'

// this is to store the report current state

export const useReportStore = defineStore(storeKey, () => {
  // inital value of the store
  const reports = ref<Report[]>([])
  const schemas = ref<Schema[]>([])

  const currentReportId = ref('')

  const currentReport = computed(() => {
    // from the current list find
    return reports.value.find((report:Report) => {
      return report.id === currentReportId.value
    })
  })

  const addToReportsToStore = (newReports: Report[]) => {
    // append new Report to the behind of the list
    reports.value = [...reports.value, ...newReports]
  }

  const addSchemasToStore = (newSchemas: Schema[]) => {
    // append new list of  schema
    schemas.value = [...schemas.value, ...newSchemas]
  }

  const initializeReport = () => {
    // check for reports whenether its empty or not
    if (reports.value.length < 0) {
      return Promise.reject(new Error('No Report was created'))
    } else {
      currentReportId.value = reports.value[0].id
    }
  }

  return {
    reports,
    schemas,
    currentReport,
    currentReportId,
    addToReportsToStore,
    addSchemasToStore,
    initializeReport
  }
})
