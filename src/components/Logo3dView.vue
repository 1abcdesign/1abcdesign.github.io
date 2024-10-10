<template>
  <div ref="canvasContainer" style="width: 100%; height: 33vh"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  setup() {
    const canvasContainer = ref(null);  // Reference to the div for rendering the 3D scene
    let model = null;  // Store the loaded model to rotate it later

    onMounted(() => {
      // Initialize the Three.js scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      
      // Set renderer with alpha for transparency
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Transparent background
      canvasContainer.value.appendChild(renderer.domElement); // Append renderer to the DOM

      // Adjust camera position
      camera.position.z = 5;

      // Load the GLB model using GLTFLoader
      const loader = new GLTFLoader();
      loader.load("/logo3d.glb", (gltf) => {
        model = gltf.scene;  // Store the model in a variable to rotate it
        scene.add(model);  // Add the loaded model to the scene
        renderer.render(scene, camera);  // Initial render
      }, undefined, (error) => {
        console.error('An error occurred while loading the model:', error);
      });

      // Lighting for better visibility of the model
      const ambientLight = new THREE.AmbientLight(0x404040, 2); // soft white light
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 10, 7.5).normalize();
      scene.add(directionalLight);

      // Animation loop to rotate the model and render the scene
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the model on Y-axis if it's loaded
        if (model) {
          model.rotation.y += 0.01;  // Rotate model by 0.01 on each frame
        }

        // Render the scene and camera
        renderer.render(scene, camera);
      };
      animate();

      // Adjust canvas size on window resize
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    });

    return {
      canvasContainer  // Returning ref to be used in the template
    };
  }
};
</script>

<style scoped>
/* Optional styles for the container */
div {
  width: 100vw;
  height: 33vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent; /* Ensure the background is transparent */
}
</style>
