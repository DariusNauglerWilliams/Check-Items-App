import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.tsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"


import Compare from './pages/Compare.tsx'
import History from './pages/History.tsx'
import Scan from './pages/Scan.tsx'
import Main from './pages/Main.tsx'
import Footer from './components/Footer.tsx'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import ForgotPassword from './pages/ForgotPassword.tsx'
import Profile from './pages/Profile.tsx'
import Settings from './pages/Settings.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/scan" element={<Scan/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/compare" element={<Compare/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
         <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
         <Route path="/profile" element={<Profile />} />
         <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </StrictMode>,
)
