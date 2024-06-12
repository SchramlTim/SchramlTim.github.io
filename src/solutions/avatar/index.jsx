import * as THREE from 'three';
import { useEffect, useRef, useCallback } from "react";
import React from 'react';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Avatar = () => {
  const refContainer = useRef(null);
  const refRenderer = useRef()
  const refFrame = useRef(0)
  let frame = 0

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientWidth

      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const loader = new OBJLoader()
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientWidth

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()

      const target = new THREE.Vector3(1, 12, 0)
      const initialCameraPosition = new THREE.Vector3(
        60 * Math.sin(0.2 * Math.PI),
        40,
        60 * Math.cos(0.2 * Math.PI)
      )

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.015 + 10.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale + 10,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true 
      controls.enablePan = false
      controls.enableZoom = false
      controls.enabled = false
      controls.target = target
      loader.load(
          './Char_Export.obj',
          function ( object ) {
              object.receiveShadow = true 
              object.castShadow = true 
              object.position.x = 5
              object.traverse(n => { if ( n.isMesh ) {
                n.castShadow = true; 
                n.receiveShadow = true;
                if(n.material.map) n.material.map.anisotropy = 16; 
              }});
              scene.add( object );
              animate()
          },
          function ( xhr ) {
              console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
          },
          function ( error ) {
              console.log( 'An error happened', error );
          }
      )
      let req = null
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 20
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }
    } 




  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])


  const trigger = () => {
    frame = 0 
  }

  return (
    <div className='w-full h-full relative'>
      <div className="absolute inset-0" onClick={() => trigger()}>Bla</div>
      <div className={'w-full'} ref={refContainer}></div>
    </div>
  );
}

export default Avatar 
