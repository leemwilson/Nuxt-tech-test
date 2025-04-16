<template>
  <div
    class="inline-flex items-center justify-center"
    role="status"
    aria-label="Loading"
  >
    <div
      v-if="isSpinning"
      class="spinner"
      :style="{ borderColor: secondaryColor, borderTopColor: props.color }"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: '#f97316' // orange-500
  }
})

const isSpinning = ref(true)

const secondaryColor = computed(() => {
  const hex = props.color.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const lighten = (value) => Math.min(255, value + 80)
  return `rgb(${lighten(r)}, ${lighten(g)}, ${lighten(b)})`
})
</script>

<style scoped>
.spinner {
  width: 32px;
  height: 32px;
  border: 4px solid;
  border-top: 4px solid;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
</style>

<style>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
