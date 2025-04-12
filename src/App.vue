<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme'
import './app.scss'

const themeStore = useThemeStore()
</script>

<template>
  <main :class="['app_container', `app_container_${themeStore.theme}`]">
    <NavigationMenu />
    <RouterView />
  </main>
</template>
