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
  // watch,
  onMounted,
  onUnmounted
} from 'vue'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  // AmbientLight,
  DirectionalLight,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { state } from '@/store.js'

const ASSETS_DIR = import.meta.env.VITE_ASSETS_DIR || '/'
const canvasContainer = ref(null)
// const color = ref(state.color || localStorage.getItem('color') || '#e6e8fa') // Reactive color state

let model = null // Store the loaded model for rotation

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

  // const directionalLight = new DirectionalLight(color.value, 2.5)
  const directionalLight = new DirectionalLight(0xe6e8fa, 2.5)
  directionalLight.position.set(1, 0, 5).normalize()
  scene.add(directionalLight)

  // Watch for color changes and update light
  // watch(() => state.color, newColor => {
  //   const colorValue = parseInt(newColor.slice(1), 16) || 0xe6e8fa
  //   directionalLight.color.setHex(colorValue)
  //   renderer.render(scene, camera)
  // })

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