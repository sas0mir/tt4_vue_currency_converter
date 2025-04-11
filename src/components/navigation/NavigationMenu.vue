<template>
  <header class="navigation_wrapper">
    <img
      alt="Currency logo"
      class="navigation_logo"
      src="@/assets/logo.svg"
      width="100"
      height="100"
    />

    <div class="navigation_links">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/converter">Converter</RouterLink>
      </nav>
    </div>
    <div class="navigation_theme_switch">
      <CustomSwitcher text_left="default" text_right="cool" :onChange="switchTheme" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import './navigationMenu.scss'
import { RouterLink } from 'vue-router'
import CustomSwitcher from '@/components/switcher/CustomSwitcher.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const { theme } = themeStore

function switchTheme(value: boolean) {
  console.log('Switcher changed:', value, theme)
  if (value) themeStore.setTheme('cool')
  else themeStore.setTheme('default')
}
</script>
