
const storeKey = 'query-store'

interface QueryState {
  businessId: string;
  token: string;
}

export const useQueryStore = defineStore(storeKey, () => {
  const businessId: Ref<string> = ref('')
  const token: Ref<string> = ref('')

  const $reset = () => {
    businessId.value = ''
    token.value = ''
  }

  const setupBusinessId = (newBusinessId: string) => {
    businessId.value = newBusinessId
  }

  const setupToken = (newToken: string) => {
    token.value = newToken
  }

  const setupState = ({ businessId: newBusinessId, token: newToken }: QueryState) => {
    businessId.value = newBusinessId
    token.value = newToken
  }

  return { businessId, token, $reset, setupBusinessId, setupToken, setupState }
})
