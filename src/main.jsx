import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import EarthScene from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EarthScene />
  </StrictMode>,
)
