import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import { Leva } from 'leva'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Leva/>
    <Canvas
      // onPointerDown={(event) => {
      //   console.log('---')
      //   console.log('X', event.clientX) 
      //   console.log('Y', event.clientY) 
      // }}
      // onPointerUp={() => { console.log('Up!') }}
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [- 20, 10, 20]
      }}>
      <Suspense>
        <App />
      </Suspense>
    </Canvas>
    <Loader />
  </React.StrictMode>,
)
