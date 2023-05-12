const storeKey: string = 'report-filter';
import { DateTime } from 'luxon';
import { defineStore } from 'pinia';

export const useReportFilterStore = defineStore(storeKey, () => {
  const timeFormat: string = 'HH:mm';
  const dateFormat: string = 'dd/M/yyyy';
  const startDateTime = computed<Date>(() => DateTime.now().startOf('day').toJSDate());
  const endDateTime = computed<Date>(() => DateTime.now().endOf('day').toJSDate());
  const dates = ref<Date[]>([startDateTime.value, endDateTime.value]);
  const startTime = computed<string>(() => `${DateTime.fromJSDate(dates.value[0]).toFormat(timeFormat)}`)
  const endTime = computed<string>(() => `${DateTime.fromJSDate(dates.value[1]).toFormat(timeFormat)}`);
  const startDate = computed<string>(() => `${DateTime.fromJSDate(dates.value[0]).toFormat(dateFormat)}`);
  const endDate = computed<string>(() => `${DateTime.fromJSDate(dates.value[1]).toFormat(dateFormat)}`);

  const formatDateRange = computed<string>(() => `${startDate.value} - ${endDate.value}, ${startTime.value} - ${endTime.value}`);

  return {
    startTime,
    endTime,
    startDate,
    endDate,
    dates,
    formatDateRange,
  };
});