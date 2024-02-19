import React, { Suspense, useRef } from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import Cube from './Cube.jsx'

export default function App({ domCanvas }) {

  

  const {gl} = useThree()
  console.log(gl)
  
  const ref = useRef()
  return <>

    <OrbitControls
      makeDefault
      domElement={gl.domElement}
      enablePan={false}
      enableZoom={true}
      onClick={() => { console.log('onPointerDown!') }}
      onPointerDown={() => { console.log('onPointerDown!') }}
    />
    <Stage
      controls={ref}
      preset="rembrandt"
      intensity={1}
      environment="city">
      <Perf position="top-left" />
      {/* <Placeholder/> */}
      <Cube />
    </Stage>
  </>

}
