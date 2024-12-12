<template>
  <menu
    class="color-switcher"
    v-click-outside="closeMenu"
    :class="{ open: showOptions, closed: !showOptions }"
  >
    <li
      v-for="color in sortedColors"
      :key="color"
      @click="handleClick(Object.keys(color)[0])"
      :style="{ background: Object.keys(color)[0] }"
      class="flex-center"
    >
      <!-- {{ Object.values(color)[0] }} -->
    </li>
  </menu>
</template>

<script setup>
import { ref, computed } from 'vue'
import { state } from '@/store.js'

const colors = [
  { '#e6e8fa': 'Ag' }, // Silver
  { '#d4af37': 'Au' }, // Gold

  // Red
  { '#ff4500': 'Ruby' }, // Ruby (Red)
  { '#ff7f50': 'Coral' }, // Coral

  // Orange
  { '#ffa500': 'Amber' }, // Amber
  { '#b87333': 'Cu' }, // Copper

  // Yellow
  { '#ffd700': 'Gold' }, // Golden Yellow
  { '#daa520': 'AuAg' }, // Gold-Silver Alloy

  // Green
  { '#32cd32': 'Lime' }, // Lime Green
  { '#4caf50': 'Em' }, // Emerald (Green)

  // Cyan
  { '#20b2aa': 'Sea' }, // Light Sea Green
  { '#00ffff': 'Aqua' }, // Aqua

  // Blue
  { '#1e90ff': 'Sapph' }, // Sapphire
  { '#4169e1': 'Royal' }, // Royal Blue

  // Violet
  { '#9932cc': 'Orchid' }, // Orchid
  { '#dda0dd': 'Am' }, // Amethyst
];

const selectedColor = ref(localStorage.getItem('color'))

const sortedColors = computed(() => [...colors].sort(color => Object.keys(color)[0] === selectedColor.value ? -1 : 1))

const showOptions = ref(false)

const setColor = color => {
  selectedColor.value = color
  localStorage.setItem('color', color)
  setRootVars(color)
  state.setColor(color)
}

const setRootVars = color => {
  document.documentElement.style.setProperty('--metallic', color);
  document.documentElement.style.setProperty('--metallic-25', color + '40');
}

const openMenu = () => {
  showOptions.value = true
}

const closeMenu = () => {
  showOptions.value = false
}

const handleClick = color => {
  if (!showOptions.value) {
    openMenu()
    return
  }

  setColor(color)
  showOptions.value = !showOptions.value
}
</script>

<style lang="scss" scoped>
.color-switcher {
  cursor: pointer;
  overflow: hidden;
  position: absolute;
  top: -1.25rem;
  gap: 0.25rem;
  padding: 0.25rem;

  li {
    width: 2rem;
    height: 2rem;
    border-radius: 1.25rem;

    &:not(:last-of-type) {
      margin-bottom: 0.25rem;
    }
  }

  &.open {
    height: max-content;
  }

  &.closed {
    height: 2.5rem;
  }
}

</style>