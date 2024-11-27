<template>
  <div
    id="logo_overlay"
    ref="logo_overlay"
    class="flex-center"
    :class="{ fadeOut: fadeOutClass }"
    :style="{ zIndex: isVisible ? 100 : -100, opacity: isVisible ? 'inherit' : 0 }"
    @animationend="handleAnimationEnd"
  >
    <div id="logo_2d_wrapper">
      <canvas
        id="logo_2d"
        ref="logo_2d"
        width="400"
        height="400"
        style="stroke: var(--color0)"
      ></canvas>
      <svg
        id="svg_placeholder"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="200" y1="400" x2="200" y2="0" />
        <line x1="200" y1="0" x2="0" y2="200" />
        <line x1="0" y1="200" x2="200" y2="200" />
        <path d="M 200,14 A 93, 93, 0 1 1 200, 200" fill="none" />
        <circle cx="200" cy="200" r="186" fill="none" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { state } from '@/store.js'

const getTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'dark'
    ? '#fff'
    : '#000'

const totalDuration = ref(1170) // Загальна тривалість анімації в мілісекундах (2340ms for 30fps)
const isVisible = ref(true)
const fadeOutClass = ref(false)
const logo_overlay = ref(null)
const logo_2d = ref(null)

// Watch for changes in the state.showLoader value
watch(
  () => state.showLoader,
  (newValue) => {
    if (newValue) {
      isVisible.value = newValue
      // Restart animation when loader becomes visible
      startAnimation()
    } else {
      // setTimeout(() => isVisible.value = newValue, 1170)
    }
  }
)

onMounted(() => {
  startAnimation()
})

let startTime = null

function startAnimation() {
  document.getElementById('logo_overlay').classList.remove('fade-out')
  const canvas = logo_2d.value || document.getElementById('logo_2d')
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear the canvas
  ctx.lineWidth = 28
  ctx.strokeStyle = getTheme()

  const drawFunctions = [
    progress => {
      ctx.beginPath()
      ctx.moveTo(200, 400)
      ctx.lineTo(200, 400 - progress)
      ctx.stroke()
    },
    progress => {
      ctx.beginPath()
      ctx.moveTo(200, 0)
      ctx.lineTo(200 - progress, progress)
      ctx.stroke()
    },
    progress => {
      ctx.beginPath()
      ctx.moveTo(0, 200)
      ctx.lineTo(progress, 200)
      ctx.stroke()
    },
    progress => {
      ctx.beginPath()
      ctx.ellipse(
        200,
        105,
        93,
        93,
        Math.PI / 2,
        0,
        (-Math.PI / 180) * progress,
        true
      )
      ctx.stroke()
    },
    progress => {
      ctx.beginPath()
      ctx.ellipse(
        200,
        200,
        186,
        186,
        -Math.PI / 2,
        0,
        (-Math.PI / 180) * progress,
        true
      )
      ctx.stroke()
    },
  ]

  const segmentDurations = [0.17, 0.12, 0.08, 0.13, 0.5].map(
    percentage => totalDuration.value * percentage
  )
  const segmentMaxValues = [400, 200, 200, 180, 360]

  function animate(timestamp) {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime

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

    if (elapsed < totalDuration.value) {
      requestAnimationFrame(animate)
    } else if (state.showLoader) {
      startTime = null // Reset the start time
      ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear the canvas
      requestAnimationFrame(animate) // Restart the animation
    } else {
      // Add fade-out animation class
      fadeOutClass.value = true
    }
  }

  requestAnimationFrame(animate)
}

const handleAnimationEnd = () => {
  setTimeout(() => {
    isVisible.value = false
    fadeOutClass.value = false
  }, 1170)
}
</script>

<style lang="scss">
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fadeOut {
  animation: fade-out 1170ms forwards ease-out; // Starts fading out after the animation completes
  -webkit-animation: fade-out 1170ms forwards ease-out; // Webkit version of animation
  -moz-animation: fade-out 1170ms forwards ease-out; // Mozilla version of animation
}

#logo_overlay {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100svh;
  background: var(--bg);
  overflow: hidden !important;
  pointer-events: none; // Prevents interaction after fading out
  opacity: 0;
}

#logo_2d_wrapper {
  width: 50vmin;
  height: 50vmin;
  position: relative;
  top: 2vmin;
}

#logo_2d,
#svg_placeholder {
  width: 50vmin;
  height: 50vmin;
}

#svg_placeholder {
  position: absolute;
  top: 0;
  left: 0;
  stroke-width: 28px;
  -webkit-stroke-width: 28px; // Webkit-specific stroke-width
  -moz-stroke-width: 28px; // Mozilla-specific stroke-width
  stroke: #888888;
}

#logo_2d {
  position: relative;
  z-index: 1;
  stroke: var(--color0);
  -webkit-stroke: var(--color0); // Webkit-specific stroke
  -moz-stroke: var(--color0); // Mozilla-specific stroke
}
</style>
