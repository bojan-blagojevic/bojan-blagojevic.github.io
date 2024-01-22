import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
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
