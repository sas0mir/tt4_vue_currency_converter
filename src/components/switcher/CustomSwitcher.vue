<template>
  <div class="switch_wrapper">
    <p class="switch_text">{{ text_left }}</p>
    <div
      @click="toggleSwitch"
      :class="{
        switch: true,
        switch_on: isEnabled,
        switch_off: !isEnabled,
      }"
    >
      <div
        :class="{
          inner_switch: true,
          inner_switch_left: !isEnabled,
          inner_switch_right: isEnabled,
        }"
      ></div>
    </div>
    <p class="switch_text">{{ text_right }}</p>
  </div>
</template>

<script setup lang="ts">
import './customSwitcher.scss'
import { ref } from 'vue'

const props = defineProps<{
  text_left?: string
  text_right?: string
  onChange?: (value: boolean) => void
}>()

const isEnabled = ref(false)

function toggleSwitch() {
  isEnabled.value = !isEnabled.value
  if (props.onChange) {
    props.onChange(isEnabled.value)
  }
}
</script>
