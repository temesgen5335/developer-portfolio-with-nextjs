//Import the THREE.js library
import * as THREE from 'three'
// To allow for the camera to move around the scene
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// To allow for importing the .gltf file
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const initializeScene = (container) => {
    // Create a Three.JS Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  
    // Keep track of the mouse position
    let mouseX = container.clientWidth / 2;
    let mouseY = container.clientHeight / 2;
  
    // Keep the 3D object on a global variable
    let object = null;
  
    // Set which object to render
    const objToRender = "cute_robot_companion_glb";
  
    // Instantiate a loader for the .gltf file
    const loader = new GLTFLoader();
  
    // Load the file
    loader.load(
      `/models/${objToRender}/scene.gltf`,
      (gltf) => {
        object = gltf.scene;
        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error(error);
      }
    );
  
    // Instantiate a new renderer and set its size
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
  
    // Set camera position
    camera.position.z = objToRender === "cute_robot_companion_glb" ? 25 : 5;
  
    // Main directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Ambient fill light
    const ambientLight = new THREE.AmbientLight(0x404040, 3);
    scene.add(ambientLight);

    // Back light for depth
    const backLight = new THREE.DirectionalLight(0xffffff, 1);
    backLight.position.set(-5, 5, -5);
    scene.add(backLight);

    // Helper to visualize light direction
    scene.add(new THREE.DirectionalLightHelper(directionalLight));

    // Add OrbitControls for interactivity
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Add smooth damping
    controls.dampingFactor = 0.05;
  
    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Required for damping
      renderer.render(scene, camera);
    };
  
    animate();
  
    // Handle window resizing
    window.addEventListener("resize", () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  
    // Handle mouse movement for interactivity
    container.onmousemove = (e) => {
      mouseX = e.clientX - container.getBoundingClientRect().left;
      mouseY = e.clientY - container.getBoundingClientRect().top;
  
      if (object && objToRender === "eye") {
        object.rotation.y = -3 + (mouseX / container.clientWidth) * 3;
        object.rotation.x = -1.2 + (mouseY * 2.5) / container.clientHeight;
      }
    };
  };