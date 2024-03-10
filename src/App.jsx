import React, { useRef } from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Cube from './Cube.jsx'

export default function App() {

  
  
  const ref = useRef()
  return <>

    <OrbitControls
      makeDefault
      enablePan={false}
      enableZoom={true}
    />
    <Stage
      controls={ref}
      preset="rembrandt"
      intensity={1}
      environment="city">
      <Perf position="top-left" />
      <Cube />
    </Stage>
  </>

}
