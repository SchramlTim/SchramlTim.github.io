import * as THREE from 'three';
import { useEffect, useRef } from "react";
import React from 'react';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Avatar = () => {
  const refContainer = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer( { alpha: true });
    renderer.setSize(300, 300);
    refContainer.current && refContainer.current.appendChild( renderer.domElement );
    const loader = new OBJLoader();

    const light =  new THREE.DirectionalLight( 0xffffff, 1);
    light.position.set(0, 0, 1)
    scene.add( light );

    loader.load(
        './Char_Export.obj',
        function ( object ) {
            light.target = object
            scene.add( object );
            camera.position.set( 0, 24, 25 );
            camera.rotation.set(-0.15,0.2, 0.02)
            function animate() {
                requestAnimationFrame( animate );
                renderer.render( scene, camera );
            } 
            animate()
        },
        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        function ( error ) {
            console.log( 'An error happened' );
        }
    ); 
  }, []);
  return (
    <div ref={refContainer}></div>
  );
}

export default Avatar 