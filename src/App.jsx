import { useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

export default function App() {
  const { position } = useControls({ position: - 2 })
  const cube = useRef()

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2
  })

  const eventHandler = () => {
    cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%`)
  }
  return <>
    <OrbitControls makeDefault />
    <Perf position="top-left"/>

    <directionalLight position={[1, 2, 3]} intensity={4.5} />
    <ambientLight intensity={1.5} />


    <mesh position-x={position}>
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
      <Sparkles
        scale={10}
        color={50}
        size={3}
      />
    </mesh>

    <mesh ref={cube} position-x={2} scale={1.5} onClick={eventHandler}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>

    <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
      <planeGeometry />
      <meshStandardMaterial color="greenyellow" />
    </mesh>
  </>
}
