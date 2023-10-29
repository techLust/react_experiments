import * as THREE from 'three';
import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js';
import { PCDLoader } from './three/examples/jsm/loaders/PCDLoader.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();
const geometry = new THREE.BoxGeometry(1, 1, 1);

const texture = loader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZixeRHXdJ7WeEeqh-Hcbch4LfnHb1vzDWKWiBQ7c&s');

const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);

// PCD LOADER 
// const pcdLoader = new PCDLoader();
// pcdLoader.load('https://people.math.sc.edu/Burkardt/data/pcd/p213.pcd', function(pcd){
// scene.add(pcd)
// })

scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}



animate();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// ZOOM IN
const zoomInBtn = document.querySelector('#zoom-in').addEventListener('click',
    function zoomIn() {
        camera.position.z -= 1
        console.log('Zoom in clicked')
    }
)

//ZOOM OUT
const zoomOutBtn = document.querySelector('#zoom-out').addEventListener('click',
    function zoomIn() {
        console.log('Zoom in clicked')
        camera.position.z += 1
    }
)

// RESET ZOOM
const resetZoom = document.querySelector('#initial-position').addEventListener('click',
    function resetZoom() {
        camera.position.z = camera.position.z = 5;
        cube.rotation.x = 0.01;
        cube.rotation.y = 0.01;
    }
)

// Function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

// Specify the rotation angles in degrees
const initialRotationXDegrees = 89;
const initialRotationYDegrees = 89; 

const initialRotationX = degreesToRadians(initialRotationXDegrees);
const initialRotationY = degreesToRadians(initialRotationYDegrees);

// SIDE 1
const side1 = document.querySelector('#side1').addEventListener('click',
    function rotateSide_1() {
        // cube.rotation.y += 1;
        cube.rotation.x = initialRotationX;
        // console.log(cube.rotation.y += 1)
    }
)

// SIDE 2
const side2 = document.querySelector('#side2').addEventListener('click',
    function rotateSide_2() {
        // cube.rotation.y -= 1;
        cube.rotation.y = initialRotationY;
        
    }
)

// SIDE 3
const side3 = document.querySelector('#side3').addEventListener('click',
    function rotateSide_3() {
        // cube.rotation.x += 1;
        cube.rotation.x += 1;
    }
)

// SIDE 4
const side4 = document.querySelector('#side4').addEventListener('click',
    function rotateSide_4() {
        // cube.rotation.x += 1;
        cube.rotation.x -= 1;
    }
)

// WHEEL ZOOM CONTROLL USING CAMERA
// window.addEventListener('wheel', handleMouseWheel);

function handleMouseWheel(event) {
    const zoomSpeed = 0.1; // Adjust the zoom speed as needed
    camera.fov -= event.deltaY * zoomSpeed;
    camera.fov = Math.max(5, Math.min(100, camera.fov)); // Adjust min and max FOV values if necessary
    camera.updateProjectionMatrix();
}