import * as THREE from 'three';
import { useEffect, useRef } from "react";
import React from 'react';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Avatar = () => {
  const refContainer = useRef(null);
  useEffect(() => {
    const loader = new OBJLoader();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer( { alpha: true });
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    camera.position.set( 2, 23, 25 );
    camera.rotation.set(-0.10,0.2, 0.02)
    const resolution = Math.min(300, window.innerWidth / 2)
    renderer.setSize( resolution, resolution);
    refContainer.current && refContainer.current.appendChild( renderer.domElement );
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x080820, 3)
    scene.add(hemiLight)

    const light = new THREE.DirectionalLight(0xffffff, Math.PI)
    light.position.set(1,10,10);
    light.castShadow = true
    light.shadow.mapSize.width = 512
    light.shadow.mapSize.height = 512
    light.shadow.camera.near = 0.5
    light.shadow.camera.far = 100
    scene.add(light)

    const planeGeometry = new THREE.PlaneGeometry(100, 20)
    const plane = new THREE.Mesh(planeGeometry, new THREE.MeshPhongMaterial())
    plane.rotateX(-Math.PI / 2)
    plane.position.y = -1.75
    plane.receiveShadow = true
    //scene.add(plane)

    const helper = new THREE.CameraHelper(light.shadow.camera)
    //scene.add(helper)
    
    window.addEventListener( 'resize', onWindowResize, false );

    function onWindowResize(){
        console.log('resize')
        camera.updateProjectionMatrix();
        const resolution = Math.min(300, window.innerWidth / 2)
        renderer.setSize( resolution, resolution);
    
    }


    loader.load(
        './Char_Export.obj',
        function ( object ) {
            object.traverse(n => { if ( n.isMesh ) {
              n.castShadow = true; 
              n.receiveShadow = true;
              if(n.material.map) n.material.map.anisotropy = 16; 
            }});
            scene.add( object );
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
            console.log( 'An error happened', error );
        }
    ); 
  }, []);

  //return (<div></div>)

  return (
    <div ref={refContainer}></div>
  );
}

export default Avatar 