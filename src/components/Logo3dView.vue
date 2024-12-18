<template>
  <div
    class="canvas-container flex-center"
    ref="canvasContainer"
    style="width: 100%; height: calc(16.5 * var(--main-em)); background-color: transparent;
    filter: drop-shadow(0 0 calc(0.5 * var(--main-em)) var(--metallic-25));
  -webkit-filter: drop-shadow(0 0 calc(0.5 * var(--main-em)) var(--metallic-25));"
  ></div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onUnmounted
} from 'vue'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  Color
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const ASSETS_DIR = import.meta.env.VITE_ASSETS_DIR || '/'
const canvasContainer = ref(null)

let model = null // Store the loaded model for rotation

// Utility: Parse a CSS variable into a Three.js compatible color
const getCSSVar = (varName) => {
  const style = getComputedStyle(document.documentElement)
  const hexColor = style.getPropertyValue(varName).trim()
  return new Color(hexColor) // Three.js Color class can parse hex strings like '#e6e8fa'
}

onMounted(() => {
  const scene = new Scene()
  const camera = new PerspectiveCamera(
    76.5,
    window.innerWidth / window.innerHeight,
    1.5,
    1000
  )

  const renderer = new WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)

  canvasContainer.value.appendChild(renderer.domElement)
  camera.position.z = 2

  const loader = new GLTFLoader()
  loader.load(
    `${ASSETS_DIR}logo3d.glb`,
    gltf => {
      model = gltf.scene
      scene.add(model)
      renderer.render(scene, camera)
    },
    undefined,
    error => {
      console.error('Error loading model:', error)
    }
  )

  const color = getCSSVar('--metallic')
  const directionalLight = new DirectionalLight(color, 2.5)
  directionalLight.position.set(1, 0, 5).normalize()
  scene.add(directionalLight)

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate)
    if (model) {
      model.rotation.y += 0.01
    }
    renderer.render(scene, camera)
  }
  animate()

  // Resize handler
  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', onResize)

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })
})
</script>