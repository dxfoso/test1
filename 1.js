console.log("FHDOFHODFIO");

document.addEventListener('DOMContentLoaded', function () {

    console.log("dsdsddsxxxxxxxxxxxxxxxxxxx");

    import * as THREE from 'https://unpkg.com/three/build/three.module.js';

    import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";

    const width = window.innerWidth, height = window.innerHeight;

    // init

    const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
    camera.position.z = 1;

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);

    // Load GLB file
    const loader = new GLTFLoader();

    loader.setCrossOrigin('anonymous');
    const url = 'https://drive.google.com/uc?export=download&id=1IpOtPaxj_bDcSIXhG2ghCMGjgAQ_sKFS'; <script type="module">
        loader.load(url, function (gltf) {
            scene.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });

        // animation

        function animate(time) {
            mesh.rotation.x = time / 2000;
        mesh.rotation.y = time / 1000;

        renderer.render(scene, camera);
        }
		
}, false);

