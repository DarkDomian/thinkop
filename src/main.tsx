import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FirstStep from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStep />
  </StrictMode>,
)
