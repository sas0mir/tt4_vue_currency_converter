<template>
  <div :class="['tile_wrapper', `tile_wrapper_${themeStore.theme}`]">
    <h3>{{ props.currencyFrom }}</h3>
    <h3>{{ props.currencyTo }}</h3>
    <p>{{ props.currencyValue }}</p>
  </div>
</template>

<script setup lang="ts">
import './homepageTile.scss'
import { ref } from 'vue'
import { useThemeStore } from '@/stores/theme'

const props = defineProps<{
  currencyFrom: string
  currencyTo: string
  currencyValue: number
}>()
const themeStore = useThemeStore()
</script>
