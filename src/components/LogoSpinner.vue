<template>
  <div class="spinner-container">
    <canvas
      class="spinner-canvas icon"
      ref="spinnerCanvas"
      id="spinnerCanvas"
      width="100"
      height="100"
      :stroke="state.themeColor"
    ></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { state } from '@/store.js';

const spinnerCanvas = ref(null);
let startTime = null;

// Spinner animation details
const totalDuration = 1000; // 1 second total animation duration
const segmentDurations = [0.15, 0.11, 0.08, 0.22, 0.44].map(
  percentage => totalDuration * percentage
);
const segmentMaxValues = [100, 50, 50, 180, 360];

const drawFunctions = [
  progress => drawLine(50, 100, 50, 100 - progress),
  progress => drawLine(50, 0, 50 - progress, progress),
  progress => drawLine(0, 50, progress, 50),
  progress => drawEllipse(50, 26.5, 23.5, 23.5, Math.PI / 2, progress),
  progress => drawEllipse(50, 50, 47, 47, -Math.PI / 2, progress),
];

async function drawLine(x1, y1, x2, y2) {
  const ctx = await getCanvasContext();
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

async function drawEllipse(cx, cy, rx, ry, rotation, progress) {
  const ctx = await getCanvasContext();
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, rotation, 0, (-Math.PI / 180) * progress, true);
  ctx.stroke();
}

async function waitForCanvas() {
  while (!spinnerCanvas.value || !spinnerCanvas.value.getContext('2d')) {
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  return spinnerCanvas.value;
}

async function getCanvasContext() {
  const canvas = await waitForCanvas();
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to get 2D context');
  return ctx;
}

async function animateSpinner(timestamp) {
  const ctx = await getCanvasContext();

  if (!startTime) startTime = timestamp;
  const elapsed = timestamp - startTime;

  ctx.clearRect(0, 0, 100, 100);

  let accumulatedTime = 0;
  for (let i = 0; i < drawFunctions.length; i++) {
    const segmentStart = accumulatedTime;
    const segmentEnd = accumulatedTime + segmentDurations[i];

    const segmentProgress = Math.min(
      Math.max((elapsed - segmentStart) / segmentDurations[i], 0),
      1
    );
    const progressValue = segmentMaxValues[i] * segmentProgress;

    await drawFunctions[i](progressValue);

    accumulatedTime = segmentEnd;
  }

  if (elapsed < totalDuration) {
    requestAnimationFrame(animateSpinner);
  } else {
    startTime = null;
    requestAnimationFrame(animateSpinner); // Restart animation
  }
}

const updateTheme = async () => {
  const ctx = await getCanvasContext();
  ctx.strokeStyle = state.themeColor;
};

onMounted(async () => {
  await waitForCanvas();
  const ctx = await getCanvasContext();

  ctx.lineWidth = 7;
  ctx.strokeStyle = state.themeColor;

  requestAnimationFrame(animateSpinner);

  window.addEventListener('themechange', updateTheme);
});

onUnmounted(() => {
    window.removeEventListener('themechange', updateTheme);
});

watch(
  () => state.themeColor,
  async newColor => {
    const ctx = await getCanvasContext();
    ctx.strokeStyle = newColor;
  }
);
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
