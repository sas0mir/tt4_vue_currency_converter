<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import HomepageTile from '@/components/tile/HomepageTile.vue'
import { useThemeStore } from '@/stores/theme'
import { useCurrencyStore } from '@/stores/currency'
import './homeView.scss'

interface CurrencyData {
  from: string
  to: string
  value: number
}

const themeStore = useThemeStore()
const currencyStore = useCurrencyStore()
const apiData = ref<CurrencyData[] | null>(null)
const selectedCurrency = ref<string>('')
const infoData = ref<CurrencyData[] | null>(null)

onMounted(async () => {
  fetchCurrency()
})

watch(
  () => currencyStore.currency,
  (storeCurrency) => {
    if (storeCurrency) {
      selectedCurrency.value = storeCurrency
    }
    if (storeCurrency && apiData.value) {
      infoData.value = apiData.value.filter((data) => data.to === storeCurrency)
    }
  },
)

async function fetchCurrency() {
  try {
    //использовал апи из описания тестового задания
    const data = await fetch('https://status.neuralgeneration.com/api/currency')
    if (data.status === 200) {
      const curData = await data.json()
      if (!apiData.value) {
        apiData.value = []
      }
      //конвертируем в массив, объекты неудобно итерировать
      for (const key in curData) {
        if (curData.hasOwnProperty(key)) {
          const keyArr = key.split('-')
          apiData.value.push({
            from: keyArr[0],
            to: keyArr[1],
            value: Number(curData[key].toFixed(2)),
          })
        }
      }
      console.log('DATA->', apiData.value)
    } else throw new Error('API ERROR' + data.statusText)
  } catch (err) {
    console.error('FETCHING ERROR->', err)
  }
}
</script>

<template>
  <div :class="['homeview_wrapper', `homeview_wrapper_${themeStore.theme}`]">
    <h2 v-if="!apiData">Data fetching problems...</h2>
    <div v-else :class="['homeview_info', `homeview_info_${themeStore.theme}`]">
      <template v-for="info in infoData" :key="info.value">
        <article :class="['info_item', `info_item_${themeStore.theme}`]">
          <h3>{{ info.from }}</h3>
          <p>{{ `${1 * info.value} ${selectedCurrency}` }}</p>
        </article>
      </template>
    </div>
    <div>
      <template v-for="currency in apiData" :key="currency.value">
        <HomepageTile
          :currencyFrom="currency.from"
          :currencyTo="currency.to"
          :currencyValue="currency.value"
        />
      </template>
    </div>
  </div>
</template>
