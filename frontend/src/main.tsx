import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from './pages/Test.tsx'
import Navbar from './components/Navbar.tsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"


import Compare from './pages/Compare.tsx'
import History from './pages/History.tsx'
import Scan from './pages/Scan.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Test/>}></Route>
        <Route path="/scan" element={<Scan/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/compare" element={<Compare/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
