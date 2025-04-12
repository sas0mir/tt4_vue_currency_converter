<template>
  <header :class="['navigation_wrapper', `navigation_wrapper_${themeStore.theme}`]">
    <nav :class="['navigation_links', `navigation_links_${themeStore.theme}`]">
      <img
        alt="Currency logo"
        class="navigation_logo"
        src="@/assets/logo.svg"
        width="100"
        height="100"
      />
      <RouterLink to="/">
        <FontAwesomeIcon :icon="faHouse" />
        Home
      </RouterLink>
      <RouterLink to="/converter">
        <FontAwesomeIcon :icon="faCodeCompare" />
        Converter
      </RouterLink>
    </nav>
    <DropdownSelect :options="options" :onChange="handleChangeCurrency" />
    <div :class="['navigation_theme_switch', `navigation_theme_switch_${themeStore.theme}`]">
      <CustomSwitcher text_left="default" text_right="cool" :onChange="switchTheme" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import './navigationMenu.scss'
import { RouterLink } from 'vue-router'
import CustomSwitcher from '@/components/switcher/CustomSwitcher.vue'
import { useThemeStore } from '@/stores/theme'
import { useCurrencyStore } from '@/stores/currency'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faCodeCompare } from '@fortawesome/free-solid-svg-icons'
import DropdownSelect from '../dropdownSelect/DropdownSelect.vue'
//import { ref, watch } from 'vue'

const themeStore = useThemeStore()
const currencyStore = useCurrencyStore()
const options = ['USD', 'EUR', 'RUB']

function switchTheme(value: boolean) {
  if (value) themeStore.setTheme('cool')
  else themeStore.setTheme('default')
}

function handleChangeCurrency(value: string) {
  console.log('CURR->', value, currencyStore.currency)
  if (value && value !== currencyStore.currency) currencyStore.setCurrency(value)
}
</script>
