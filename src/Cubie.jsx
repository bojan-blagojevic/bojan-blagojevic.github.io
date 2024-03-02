/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from '@react-spring/three'

export function Cubie(
  {
    x = 0,
    y = 0,
    z = 0,
    rotation,
    k,
    onCubieClicked
  }) {
    
  const key = k
  const { nodes, materials } = useGLTF("/cubie.glb");

  const [selected, setSelected] = useState(false);
  const [startRotating, setStartRotating] = useState(false);
  const [rotationX, setRotationX] = useState(0);
  
  const { scale } = useSpring({
    scale: selected ? 1.1 : 1,
    config: config.wobbly
  })

  const { rot } = useSpring({
    rot: rotationX,
    config: config.wobbly
  })

  const pointerDownEventHandler = (event) => {
    if (selected === true) {
      console.log("Pointer down");
      setStartRotating(true);
      event.stopPropagation()
    }
  }

  const pointerLeaveEventHandler = (event) => {
    if (selected === true) {
      console.log("Pointer leave");
      if (startRotating) {
        setRotationX(rotationX + Math.PI / 2)
        setStartRotating(false);
      };
      event.stopPropagation()
    }
  }

  const pointerUpEventHandler = (event) => {
    if (selected === true) {
      setStartRotating(false);
      event.stopPropagation()
    }
  }

  return (
    <animated.mesh
      scale={scale}
      onPointerUp={pointerUpEventHandler}
      onPointerDown={pointerDownEventHandler}
      onPointerLeave={pointerLeaveEventHandler}
      onClick=//{onCubieClicked}
      {(event) => {
        setSelected(!selected)
        event.stopPropagation()
      }
      }
      rotation-x={rot}
      rotation-y={rotation.y}
      rotation-z={rotation.z}
      castShadow
      receiveShadow
    >
      <group // initial position
        position-x={x}
        position-y={y}
        position-z={z}
      >
        <mesh
          geometry={nodes.Frame.geometry}
          material={materials.BLACK}
        />
        <mesh
          geometry={nodes.Red.geometry}
          material={materials.RED}
        />
        <mesh
          geometry={nodes.Blue.geometry}
          material={materials.BLUE}
        />
        <mesh
          geometry={nodes.Yellow.geometry}
          material={materials.YELLOW}
        />
        <mesh
          geometry={nodes.White.geometry}
          material={materials.WHITE}
        />
        <mesh
          geometry={nodes.Green.geometry}
          material={materials.GREEN}
        />
        <mesh
          geometry={nodes.Pink.geometry}
          material={materials.PINK}
        />
      </group>
    </animated.mesh>
  );
}

useGLTF.preload("/cubie.glb");