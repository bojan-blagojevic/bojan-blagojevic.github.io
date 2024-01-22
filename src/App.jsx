import React, { Suspense, useRef } from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from './Model'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import Placeholder from './Placeholder'

export default function App() {

  const { position } = useControls({ position: - 2 })


  const eventHandler = () => {
    cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%`)
  }
  const ref = useRef()
  return <>

    <OrbitControls makeDefault />
    <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
      <Perf position="top-left" />
      <Model />
    </Stage>
  </>

}
