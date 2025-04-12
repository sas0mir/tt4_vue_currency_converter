import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    currency: 'RUB',
  }),
  getters: {
    getCurrency(state) {
      return state.currency
    },
  },
  actions: {
    setCurrency(newCurrency: string) {
      this.currency = newCurrency
    },
  },
})
