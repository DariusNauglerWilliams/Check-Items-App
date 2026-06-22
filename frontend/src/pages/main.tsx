import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from '../pages/Test.tsx'
import Navbar from '../components/Navbar.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
   <Test/>
  </StrictMode>,
)
