import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.tsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"


import Compare from './pages/Compare.tsx'
import History from './pages/History.tsx'
import Scan from './pages/Scan.tsx'
import Main from './pages/main.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/scan" element={<Scan/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/compare" element={<Compare/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
