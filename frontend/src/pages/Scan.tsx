import './scan.css'

import scanImg from "../assets/qr-code (1).png"
import bulbImg from "../assets/lighting-bulb.png"

import oneImg from "../assets/circle-1.png"
import twoImg from "../assets/circle-2.png"
import threeImg from "../assets/circle-3.png"
import herobottom from "../assets/ChatGPT Image Jul 9, 2026, 03_35_53 PM.png"

import camImg from "../assets/camera.png"
import searchImg from "../assets/search.png"
import { useRef } from 'react'
import { BrowserMultiFormatReader } from '@zxing/browser'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function Scan() {

  const navigate = useNavigate()
  const controlsRef = useRef<any>(null)

async function getCamera() {
  if (!videoRef.current) return

  try {
    const controls = await codeReader.decodeFromConstraints(
      {
        video: {
          facingMode: "environment"
        }
      },
      videoRef.current,
      (result) => {
        if (result) {
          const barcode = result.getText()

          controlsRef.current?.stop()

          navigate(`/products/${barcode}`)
        }
      }
    )

    controlsRef.current = controls

  } catch (err) {
    console.log(err)
  }
}


const videoRef = useRef<HTMLVideoElement>(null)



const codeReader = new BrowserMultiFormatReader()

useEffect(() => {
  return () => {
    controlsRef.current?.stop()
  }
}, [])



  return (
    <section className="scan-page">
      <div className="scan-hero">
        <div className="scan-hero-copy">
          <h1 className="scan-title">Scan A Product</h1>
          <p className="scan-subtitle">Scan a barcode to analyze ingredients and</p>
          <p className='scan-subtitle'>get a health score in seconds.</p>
        </div>
      </div>




<div className='wrapper-scan-actions'>
      <div className="scan-actions-1">
            <img src={scanImg} alt="scanImg" className="scan-above" />
        <button className="scan-button scan-button-primary" 
        onClick={getCamera}>
          <img src={camImg} alt="scanImg" className="scan-button-icon" />
          Open Scanner
        </button>

        <video ref={videoRef} autoPlay playsInline/>
      </div>

      <div className="scan-or-wrapper">
        <p className="scan-or-text">or</p>
      </div>

      <div className="scan-actions-2">
        <button className="scan-button scan-button-secondary" onClick={() => navigate("/#search-bar")}>
          <img src={searchImg} alt="searchimg" className="scan-button-icon" />
          Search Manually
        </button>
      </div>
      </div>

      <div className="scan-how-it-works">
        <h4 className="scan-how-title">
          <img src={bulbImg} alt="bulb" className="scan-how-icon" />
          How it works
        </h4>
        <p className="scan-step">
          <img src={oneImg} alt="1" className="scan-step-icon" />
          Scan a product barcode
        </p>
        <p className="scan-step">
          <img src={twoImg} alt="2" className="scan-step-icon" />
          We analyze ingredients and nutrition
        </p>
        <p className="scan-step">
          <img src={threeImg} alt="3" className="scan-step-icon" />
          Get a score and healthier alternatives
        </p>
      </div>

      <div className="scan-manual-help">
        <div className="scan-manual-copy-wrapper">
          <h3 className="scan-manual-title">Can't scan right now?</h3>
          <p className="scan-manual-copy">Search manually to find and analyze</p>
          <p className="scan-manual-copy">any product.</p>
        </div>

        <div className="scan-manual-image-wrapper">
          <img src={herobottom} alt="" className="scan-manual-image" />
        </div>
      </div>
    </section>
  );
}

export default Scan;
