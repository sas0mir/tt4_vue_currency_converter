<template>
  <div
    :class="['dds_container', `dds_container_${themeStore.theme}`]"
    ref="dropdownRef"
    @click="toggleOpen"
  >
    <div class="dds_selected">
      {{ selectedLabel }}
      <FontAwesomeIcon :icon="faCircleDown" />
    </div>
    <ul v-if="isOpen" class="dds_list">
      <li
        v-for="option in options"
        :key="option"
        @click.stop="selectOption(option)"
        class="dds_item"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, onBeforeUnmount } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'
import './dropdownSelect.scss'

const props = defineProps<{
  options: string[]
  onChange?: (value: string) => void
}>()
const selectedLabel = ref('select currency...')
const themeStore = useThemeStore()
const dropdownRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  selectedLabel.value = option
  isOpen.value = false
  if (props.onChange) {
    props.onChange(option)
  }
}

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>
