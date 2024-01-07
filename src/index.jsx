import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas>
      <Suspense>
        <App />
      </Suspense>
    </Canvas>
    <Loader />
  </React.StrictMode>,
)
