import "./Main.css"
import barcodeScan from "../assets/barcode.png"
import heroImg from "../assets/ChatGPT Image Jul 7, 2026, 04_51_44 PM.png"
import { useNavigate } from "react-router-dom"
import scanImg from "../assets/scanner.png"
import clockImg from "../assets/clock.png"
import compareImg from "../assets/ab-testing (1).png"

function Main() {
  const navigate = useNavigate()
  return (
    <>
      <section className="hero">
        <div className="hero-content">
        <h1 className="hero-title">Find Healthier Products</h1>

        <p className="hero-subtitle">Scan barcodes, search products, and compare</p>
         <p className="hero-subtitle">ingredients to make better long term choices.</p>
       

        <div className="hero-search">
          <input className="hero-input" type="text" placeholder="Search for a product..." /> <button className="hero-button">Search</button>


     
          

         
        </div>

        <p className="hero-or">or</p>

        <button className="hero-scan-button"><img src={barcodeScan} alt="img" className="img-btn"></img>Scan Barcode</button>



        
              </div>
                    <img src={heroImg} alt="hero-img" className="hero-image" />
      </section>

      <section className="quick-actions">
        <h3 className="section-title">Quick Actions</h3>



<div className="action-grid">
        <div className="action-card" onClick={() => navigate("/scan")}>
          <img src={scanImg} alt="scanimg" className="action-icon" />
          <h4 className="action-title">Scan Product</h4>
          <p className="action-text">Scan a barcode to analyze</p><p className="action-text">ingredients and nutrition.</p>
        </div>

        <div className="action-card" onClick={() => navigate("/history")}>
          <img src={clockImg} alt="historyimg" className="action-icon" />
          <h4 className="action-title">History</h4>
          <p className="action-text">See your previously scanned</p><p className="action-text">products.</p>
        </div>

        <div className="action-card" onClick={() => navigate("/compare")}>
          <img src={compareImg} alt="compareimg" className="action-icon" />
          <h4 className="action-title">Compare</h4>
          <p className="action-text">Compare two products side by</p><p className="action-text">side.</p>
        </div>
        </div>
      </section>

      <section className="recent-scans">
        <h3 className="section-title">Recent Scans</h3>

        <p className="empty-state">No products scanned yet.</p>
      </section>

      <section className="how-it-works">
        <h3 className="section-title">How It Works</h3>

        <div className="steps">
          <p className="step-text">1. Search or scan a product.</p>
          <p className="step-text">2. Review ingredients and nutrition.</p>
          <p className="step-text">3. Compare healthier alternatives.</p>
        </div>
      </section>
    </>
  );
}

export default Main;
