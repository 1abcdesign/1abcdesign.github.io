<template>
  <div
    class="canvas-container flex-center"
    ref="canvasContainer"
    style="width: 100%; height: calc(16.5 * var(--main-em)); background-color: transparent; "
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const ASSETS_DIR = import.meta.env.VITE_ASSETS_DIR || '/'

const canvasContainer = ref(null) // Reference to the div for rendering the 3D scene
let model = null // Store the loaded model to rotate it later

onMounted(() => {
  // Initialize the Three.js scene
  const scene = new Scene()
  const camera = new PerspectiveCamera(
    76.5,
    window.innerWidth / window.innerHeight,
    1.5,
    1000
  )

  // Set renderer with alpha for transparency
  const renderer = new WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0) // Transparent background

  canvasContainer.value.appendChild(renderer.domElement) // Append renderer to the DOM

  // Adjust camera position
  camera.position.z = 2

  // Load the GLB model using GLTFLoader
  const loader = new GLTFLoader()
  loader.load(
    `${ASSETS_DIR}logo3d.glb`,
    gltf => {
      model = gltf.scene // Store the model in a variable to rotate it
      scene.add(model) // Add the loaded model to the scene
      renderer.render(scene, camera) // Initial render
    },
    undefined,
    error => {
      console.error('An error occurred while loading the model:', error)
    }
  )

  // Lighting for better visibility of the model
  const ambientLight = new AmbientLight(0xffffff, 20) // soft white light
  scene.add(ambientLight)

  const directionalLight = new DirectionalLight(0xd4af80, 10)
  directionalLight.position.set(1, 0, 5).normalize()
  scene.add(directionalLight)

  // Animation loop to rotate the model and render the scene
  const animate = () => {
    requestAnimationFrame(animate)

    // Rotate the model on Y-axis if it's loaded
    if (model) {
      model.rotation.y += 0.01 // Rotate model by 0.01 on each frame
    }

    // Render the scene and camera
    renderer.render(scene, camera)
  }
  animate()

  // Adjust canvas size on window resize
  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', onResize)

  // Cleanup listener on unmount
  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })
})
</script>