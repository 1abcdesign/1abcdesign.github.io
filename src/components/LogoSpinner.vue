<template>
  <div class="spinner-container">
    <canvas
      class="spinner-canvas icon"
      ref="spinnerCanvas"
      width="100"
      height="100"
      :stroke="state.themeColor"
    ></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { state } from '@/store.js'

const spinnerCanvas = ref()
let startTime = null

// Spinner animation details
const totalDuration = 1000 // 1 second total animation duration
const segmentDurations = [0.15, 0.11, 0.08, 0.22, 0.44].map(
  percentage => totalDuration * percentage
)
const segmentMaxValues = [100, 50, 50, 180, 360]

const drawFunctions = [
  progress => {
    const ctx = spinnerCanvas.value.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(50, 100)
    ctx.lineTo(50, 100 - progress)
    ctx.stroke()
  },
  progress => {
    const ctx = spinnerCanvas.value.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(50, 0)
    ctx.lineTo(50 - progress, progress)
    ctx.stroke()
  },
  progress => {
    const ctx = spinnerCanvas.value.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(0, 50)
    ctx.lineTo(progress, 50)
    ctx.stroke()
  },
  progress => {
    const ctx = spinnerCanvas.value.getContext('2d')
    ctx.beginPath()
    ctx.ellipse(
      50,
      26.5,
      23.5,
      23.5,
      Math.PI / 2,
      0,
      (-Math.PI / 180) * progress,
      true
    )
    ctx.stroke()
  },
  progress => {
    const ctx = spinnerCanvas.value.getContext('2d')
    ctx.beginPath()
    ctx.ellipse(
      50,
      50,
      47,
      47,
      -Math.PI / 2,
      0,
      (-Math.PI / 180) * progress,
      true
    )
    ctx.stroke()
  },
]

function animateSpinner(timestamp) {
  if (!startTime) startTime = timestamp
  const elapsed = timestamp - startTime
  const ctx = spinnerCanvas.value.getContext('2d')
  ctx.clearRect(0, 0, 100, 100)

  let accumulatedTime = 0
  for (let i = 0; i < drawFunctions.length; i++) {
    const segmentStart = accumulatedTime
    const segmentEnd = accumulatedTime + segmentDurations[i]

    if (elapsed >= segmentStart && elapsed <= segmentEnd) {
      const segmentProgress = (elapsed - segmentStart) / segmentDurations[i]
      const progressValue = segmentMaxValues[i] * segmentProgress
      drawFunctions[i](Math.min(progressValue, segmentMaxValues[i]))
    } else if (elapsed > segmentEnd) {
      drawFunctions[i](segmentMaxValues[i])
    }

    accumulatedTime += segmentDurations[i]
  }

  if (elapsed < totalDuration) {
    requestAnimationFrame(animateSpinner)
  } else {
    startTime = null
    requestAnimationFrame(animateSpinner)
  }
}

onMounted(() => {
  const ctx = spinnerCanvas.value.getContext('2d')
  ctx.lineWidth = 7
  ctx.strokeStyle = state.themeColor
  requestAnimationFrame(animateSpinner)

  // Watch for theme changes
  const updateTheme = () => {
    ctx.strokeStyle = state.themeColor

    console.log('theme change')
  }

  window.addEventListener('themechange', updateTheme)

  // Cleanup listener on unmount
  onUnmounted(() => {
    window.removeEventListener('themechange', updateTheme)
  })
})

// Watch for changes in color ref to update canvas
watch(
  () => state.themeColor,
  () => {
    const ctx = spinnerCanvas.value.getContext('2d')
    ctx.strokeStyle = state.themeColor
  }
)
</script>

<style scoped>
.spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.spinner-canvas {
  width: 100px;
  height: 100px;
  background-color: transparent;
}
</style>
